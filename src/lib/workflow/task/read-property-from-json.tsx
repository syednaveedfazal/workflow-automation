import { TaskParamType, TaskType } from "@/types/task";
import { FileJson2, LucideProps } from "lucide-react";

export const ReadPropertyFromJsonTask = {
    type: TaskType.READ_PROPERTY_FROM_JSON,
    label: "Read property from JSON",
    icon: (props: LucideProps) => (
        <FileJson2 className="stroke-green-500" {...props} />
    ),
    isEntryPoint: false,
    inputs: [
        {
            name: "JSON",
            type: TaskParamType.STRING,
            required: true,
        },
        {
            name: "Property Name",
            type: TaskParamType.STRING,
            required: true,
        },
    ],
    outputs: [
        {
            name: "Property Value",
            type: TaskParamType.STRING,
        },
    ],
};
