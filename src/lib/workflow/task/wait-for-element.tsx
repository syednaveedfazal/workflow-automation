import { TaskParamType, TaskType } from "@/types/task";
import { EyeIcon, LucideProps } from "lucide-react";

export const WaitForElementTask = {
    type: TaskType.WAIT_FOR_ELEMENT,
    label: "Wait for element",
    icon: (props: LucideProps) => (
        <EyeIcon className="stroke-amber-400" {...props} />
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "Selector",
            type: TaskParamType.STRING,
            required: true,
        },
        {
            name: "Visibility",
            type: TaskParamType.SELECT,
            required: true,
            options: [
                { label: "Visible", value: "visible" },
                { label: "Hidden", value: "hidden" },
            ],
        },
        {
            name: "Web page",
            type: TaskParamType.BROWSER_INSTANCE,
            required: true,
        },
    ],
    outputs: [
        {
            name: "Web page",
            type: TaskParamType.BROWSER_INSTANCE,
        },
    ],
} as const;
