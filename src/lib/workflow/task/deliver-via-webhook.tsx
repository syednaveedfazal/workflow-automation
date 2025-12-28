import { TaskParamType, TaskType } from "@/types/task";
import { LucideProps, SendIcon } from "lucide-react";

export const DeliverViaWebhookTask = {
    type: TaskType.DELIVER_VIA_WEBHOOK,
    label: "Deliver via Webhook",
    icon: (props: LucideProps) => (
        <SendIcon className="stroke-blue-400" {...props} />
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "Target URL",
            type: TaskParamType.STRING,
            required: true,
        },
        {
            name: "Body",
            type: TaskParamType.STRING,
            required: true,
        },
    ],
    outputs: [],
} as const;
