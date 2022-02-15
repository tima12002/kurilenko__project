const modalService = () => {
    const buttons = document.querySelectorAll('.btn-sm')
    const modalService = document.querySelector('.services-modal')
    const closeBtn = modalService.querySelector('.services-modal__close')
    const ovelray = document.querySelector('.overlay')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalService.style.display = 'block'
            ovelray.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modalService.style.display = 'none'
        ovelray.style.display = 'none'
    })
}

export default modalService