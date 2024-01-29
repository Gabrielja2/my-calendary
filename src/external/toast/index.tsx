import React from "react";
import {
    Id,
    ToastContent,
    ToastOptions,
    toast,
    ToastContainer,
    ToastContainerProps,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastAdapterProtocol } from "./protocol";

export class ToastifyAdapter implements ToastAdapterProtocol {
    toast(
        content: ToastContent<unknown>,
        options?: ToastOptions<{}> | undefined
    ): Id {
        return toast(content, options);
    }

    toastContainer(
        props: ToastContainerProps & React.RefAttributes<HTMLDivElement>
    ) {
        return <ToastContainer {...props} />;
    }
}
