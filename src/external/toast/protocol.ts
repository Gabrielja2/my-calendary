
import { Id, ToastContainerProps, ToastContent, ToastOptions } from "react-toastify";

export interface ToastAdapterProtocol {
    toast(content: ToastContent<unknown>, options?: ToastOptions<{}> | undefined): Id
    toastContainer(props: ToastContainerProps & React.RefAttributes<HTMLDivElement>): JSX.Element
}