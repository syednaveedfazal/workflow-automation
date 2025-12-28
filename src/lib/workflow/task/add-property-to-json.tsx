import { TaskParamType, TaskType } from "@/types/task";
import { DatabaseIcon, LucideProps } from "lucide-react";

export const AddPropertyToJsonTask = {
    type: TaskType.ADD_PROPERTY_TO_JSON,
    label: "Add property to JSON",
    icon: (props: LucideProps) => (
        <DatabaseIcon className="stroke-orange-400" {...props} />
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
        {
            name: "Property Value",
            type: TaskParamType.STRING,
            required: true,
        },
    ],
    outputs: [
        {
            name: "JSON",
            type: TaskParamType.STRING,
        },
    ],
};
