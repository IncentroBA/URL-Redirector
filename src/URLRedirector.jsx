import { useEffect } from "react";

export default function URLRedirector({ ExpressionURL, Target }) {
    useEffect(() => {
        if (ExpressionURL.status === "available") {
            if (Target === "Page") {
                window.location.replace(ExpressionURL.value);
            } else {
                window.open(ExpressionURL.value);
            }
        }
    });

    return null;
}
