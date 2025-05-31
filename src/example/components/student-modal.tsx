import Modal from 'react-modal';
import { MODAL_STYLES } from '../constants/modal.styles';
import { useUniversityContext } from '../contexts/university.context';

interface Props {
  isOpen?: boolean;
  onRequestClose?: () => void;
}
export const StudentModal = ({ isOpen = false, onRequestClose }: Props) => {
  const { companies } = useUniversityContext();
  let subtitle: HTMLHeadingElement | null;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle === null) return;
    subtitle.style.color = '#f00';
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      style={MODAL_STYLES}
      contentLabel="Example Modal"
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={onRequestClose}>close</button>
      <div>I am a modal</div>
      <pre>{JSON.stringify(companies, null, 2)}</pre>
    </Modal>
  );
};
