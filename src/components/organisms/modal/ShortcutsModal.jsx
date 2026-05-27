import ShortCutItem from '../../molecules/ShortcutItem'
import shortcutsData from '../../../constants/shortcutsData'
import Modal from './Modal'

function ShortcutsModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="⌨️ Keyboard Shortcuts">
            <div className="modal-body">
                <div className="shortcuts-grid">
                    {shortcutsData.map(sc => (
                        <ShortCutItem 
                            key={sc.id || crypto.randomUUID()}
                            action={sc.action}
                            keys={sc.keys}
                        />
                    ))}
                </div>
            </div>
        </Modal>
    )
}

export default ShortcutsModal