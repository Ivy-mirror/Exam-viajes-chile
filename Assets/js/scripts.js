const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$('#enviar').click(function () {
    alert('Enviado correctamente.')
})
$(".Destacados").on('dblclick',function(){
    $(this).css({
        "color":"red"
    })
})