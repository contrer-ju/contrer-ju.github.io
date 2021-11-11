$(document).ready(function () {
    $(function () {
        var onIframeReady = function ($i, successFn, errorFn) {
            try {
                const iCon = $i.first()[0].contentWindow,
                    bl = "about:blank",
                    compl = "complete";
                const callCallback = () => {
                    try {
                        const $con = $i.contents();
                        if ($con.length === 0) {
                            throw new Error("iframe inaccessible");
                        }
                        successFn($con);
                    } catch (e) {
                        errorFn();
                    }
                };
                const observeOnload = () => {
                    $i.on("load.jqueryMark", () => {
                        try {
                            const src = $i.attr("src").trim(),
                                href = iCon.location.href;
                            if (href !== bl || src === bl || src === "") {
                                $i.off("load.jqueryMark");
                                callCallback();
                            }
                        } catch (e) {
                            errorFn();
                        }
                    });
                };
                if (iCon.document.readyState === compl) {
                    const src = $i.attr("src").trim(),
                        href = iCon.location.href;
                    if (href === bl && src !== bl && src !== "") {
                        observeOnload();
                    } else {
                        callCallback();
                    }
                } else {
                    observeOnload();
                }
            } catch (e) {
                errorFn();
            }
        };
    });

});