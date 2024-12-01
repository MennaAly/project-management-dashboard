export type popupStaus = 'loading' | 'success' | 'error';

export type modalButtonProperties = {
    title: string,
    class: string
    icon?: JSX.Element,
}

export type modalTitleProperties = {
    title: string,
    class: string
}

export type submitModalProperties = {
    showSubmitButton: boolean,
    submit: () => void,
    isLoading: boolean
}