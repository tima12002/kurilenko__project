const modal = () => {
    const modal = document.querySelector('.header-modal')
    const ovelray = document.querySelector('.overlay')
    const buttons = document.querySelectorAll('.btn-block')
    const closeBtn = modal.querySelector('.header-modal__close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            ovelray.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        ovelray.style.display = 'none'
    })
}

export default modal