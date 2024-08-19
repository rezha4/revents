import { useAppSelector } from "../../app/store/store";
import ModalWrapper from "../../app/common/modals/ModalWrapper";

export default function TestModal() {
  const { data } = useAppSelector((state) => state.modals);

  return (
    <ModalWrapper header={"tes"}>
      <div>Tesdata is {data}</div>
    </ModalWrapper>
  );
}
