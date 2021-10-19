export default function URLRedirector({ ExpressionURL, Target }) {
    console.info("ExpressionURL", ExpressionURL.value);
    console.info("Target.value", Target);

    if (Target === "Page") {
        window.location.replace(ExpressionURL.value);
    } else {
        window.open(ExpressionURL.value);
    }
    return null;
}
