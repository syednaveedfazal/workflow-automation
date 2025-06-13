import { CreateWorkflow } from "@/actions/workflows/create-work-flow";
import { WorkflowStatus } from "@/types/workflow-types";
import { TaskType } from "@/types/task";

// Mock dependencies
jest.mock("@/lib/prisma", () => ({
  default: {
    workflow: {
      create: jest.fn(),
    },
  },
}));

jest.mock("@clerk/nextjs/server", () => ({
  auth: jest.fn(),
}));

jest.mock("@/lib/workflow/createFlowNode", () => ({
  CreateFlowNode: jest.fn(() => ({
    id: "node-1",
    type: TaskType.LAUNCH_BROWSER,
    data: {},
    position: { x: 0, y: 0 },
  })),
}));

jest.mock("@/formSchema/workflow", () => {
  const originalModule = jest.requireActual("@/formSchema/workflow");
  return {
    ...originalModule,
    createWorkflowSchema: {
      safeParse: jest.fn(),
    },
  };
});

import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { createWorkflowSchema } from "@/formSchema/workflow";

describe("CreateWorkflow", () => {
  const validForm = {
    name: "Test Workflow",
    description: "Just testing",
  };

  const mockUserId = "user-123";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a workflow and return the editor URL", async () => {
    (auth as unknown as jest.Mock).mockResolvedValue({ userId: mockUserId });
    (createWorkflowSchema.safeParse as jest.Mock).mockReturnValue({
      success: true,
      data: validForm,
    });
    (prisma.workflow.create as jest.Mock).mockResolvedValue({
      id: "workflow-456",
    });

    const result = await CreateWorkflow(validForm);

    expect(auth).toHaveBeenCalled();
    expect(createWorkflowSchema.safeParse).toHaveBeenCalledWith(validForm);
    expect(prisma.workflow.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          userId: mockUserId,
          status: WorkflowStatus.DRAFT,
          definition: expect.any(String),
          name: "Test Workflow",
        }),
      })
    );
    expect(result).toBe("/workflow/editor/workflow-456");
  });

  it("should throw error if form data is invalid", async () => {
    (createWorkflowSchema.safeParse as jest.Mock).mockReturnValue({
      success: false,
    });

    await expect(CreateWorkflow(validForm)).rejects.toThrow(
      "Invalid form data"
    );
  });

  it("should throw error if user is not authenticated", async () => {
    (createWorkflowSchema.safeParse as jest.Mock).mockReturnValue({
      success: true,
      data: validForm,
    });
    (auth as unknown as jest.Mock).mockResolvedValue({ userId: null });

    await expect(CreateWorkflow(validForm)).rejects.toThrow(
      "User not authenticated"
    );
  });

  it("should throw error if prisma fails to create workflow", async () => {
    (createWorkflowSchema.safeParse as jest.Mock).mockReturnValue({
      success: true,
      data: validForm,
    });
    (auth as unknown as jest.Mock).mockResolvedValue({ userId: mockUserId });
    (prisma.workflow.create as jest.Mock).mockResolvedValue(null);

    await expect(CreateWorkflow(validForm)).rejects.toThrow(
      "Failed to create workflow"
    );
  });
});
