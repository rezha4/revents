import { useAppSelector } from "../../store/store";
import TestModal from "../../../features/scratch/TestModal"; // Adjust this line based on export type
import LoginForm from "../../../features/auth/LoginForm";
import RegisterForm from "../../../features/auth/RegisterForm";

export default function ModalManager() {
  const modalLookup = {
    TestModal,
    LoginForm,
    RegisterForm
  };

  const { type, data, open } = useAppSelector(
    (state) => state.modals
  );

  let renderedModal;

  if (open && type) {
    const ModalComponent = (modalLookup as any)[type];
    if (ModalComponent) {
      renderedModal = <ModalComponent data={data} />;
    } else {
      console.error(
        `Modal component type "${type}" not found in modalLookup.`
      );
    }
  }

  return <span>{renderedModal}</span>;
}
