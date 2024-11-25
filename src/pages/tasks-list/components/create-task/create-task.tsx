import { useState, useRef , useMemo} from "react";
import useShowPopup from "../../../../hooks/useShowPopup";
import { useCreateTaskData } from "../../../../hooks/useTaskData";
import { priority } from "../../../../types/taskTypes";
import Dropdown from "../../../../UI/dropdown/dropdown";
import PlusIcon from "../../../../UI/icons/plus/plus";
import Modal from "../../../../UI/modal/modal";
import StatusPopup from "../../../../UI/statusPopup/statusPopup";
import { priorityDropdownOptions } from "../../constants/constants";
import "./create-task.css";

const createFormButtonProps = {
    title: 'Add task',
    icon: <PlusIcon size={16} />,
    class: "primary-button primary-button__with-icon"
};

const modalTitleProperties = {
    title: 'Create Task',
    class: 'create-form__modal-title'
}

function CreateTaskForm() {
    const [name, setName] = useState({
        value: '',
        errorMessage: 'Task must have name',
        showError: false,
    })
    const [content, setContent] = useState('')
    const {status, showStatusPopup} = useShowPopup();
    const dropdownRef = useRef<{getSelectedValue: () => priority }>();
    const priorityDropdown = useMemo(() =>{
        return(
            <Dropdown ref={dropdownRef} options={priorityDropdownOptions}/>
        )
    }, [])
    const {mutate: createTask, isLoading} = useCreateTaskData({
        onSuccess: () => {
            showStatusPopup('success')
            clearTaskFormValues();
        },
        onError: () => {
            showStatusPopup('error')
        }
    })
    const submitProperties = {
        submit: handleCreateTask,
        isLoading: isLoading,
        showSubmitButton: true
    }

    function validateTaskForm() {
        return name.value.trim() !== '';
    }

    function updateNameProperty(property: string, value: string | boolean) {
        setName((prevName) => {
            return {
                ...prevName,
                [property]: value
            }
        })
    }

    function showNameErorr() {
       updateNameProperty('showError', true)
    }

    function hideNameError() {
        updateNameProperty('showError', false)
    }

    function clearTaskFormValues() {
        setName({
            value: '',
            errorMessage: 'Task must have name',
            showError: false,
        });
        setContent('');
    }

    function handleCreateTaskValid() {
        const priority = dropdownRef.current ? dropdownRef.current.getSelectedValue() : 'low';
        hideNameError()
        createTask({
            name: name.value,
            priority,
            content
        })
    }

    function handleCreateTaskInValid() {
        showNameErorr()
    }

    function handleCreateTask() {
        if(validateTaskForm()) {
            handleCreateTaskValid()
        } else {
            handleCreateTaskInValid()
        }
    }

    return(
        <> 
            <Modal 
                controllerBtnProperties={createFormButtonProps}
                modalTitleProperties={modalTitleProperties}
                submitProperties={submitProperties}>
                    <form className="create-task-form">
                        <label className="create-task-form__label">Task Name *</label>
                        <input className="create-task-form__input" value={name.value} onChange={(e) => updateNameProperty('value', e.target.value)}/>
                        {name.showError? <p>{name.errorMessage}</p> : null}
                        <label className="create-task-form__label">Task Priority</label>
                        {priorityDropdown}
                        <label className="create-task-form__label">Task Content</label>
                        <input className="create-task-form__input" value={content} onChange={(e) => setContent(e.target.value)}/>    
                    </form> 
            </Modal>
            {status ? <StatusPopup status={status} /> : null}
        </>
    )
}

export default CreateTaskForm;