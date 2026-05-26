import ShortCutItem from './ShortcutItem'
import shortcutsData from './shortcutsData'
import Button from '../../ui/Button'
import Modal from '../../ui/Modal'

function ShortcutsModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="modal-header">
                <span className="modal-title">⌨️ Keyboard Shortcuts</span>
                <Button variant="modalClose" text="✕" onClick={onClose} />
            </div>
            
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