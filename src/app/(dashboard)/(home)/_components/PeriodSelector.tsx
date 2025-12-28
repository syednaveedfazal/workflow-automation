"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function PeriodSelector() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="option1">October 2024</SelectItem>
                <SelectItem value="option2">November 2024</SelectItem>
            </SelectContent>
        </Select>
    );
}
