import ShortCutItem from '../../molecules/ShortcutItem'
import shortcutsData from '../../../constants/shortcutsData'
import Modal from './Modal'

function ShortcutsModal({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="⌨️ Keyboard Shortcuts">
            <div className="px-5.5 py-5">
                <div className="grid grid-cols-2 gap-2.5">
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