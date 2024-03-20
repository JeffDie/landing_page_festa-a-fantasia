AOS.init();

const dataDoEvento = new Date("Jan 03, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horaAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
    const minAteOEvento = Math.floor((distanciaDoEvento % horaEmMs) / minEmMs);
    const segAteOEvento = Math.floor((distanciaDoEvento % minEmMs) / 1000);

    document.getElementById('contador').innerHTML = ` começa em ${diasAteOEvento}d ${horaAteOEvento}h ${minAteOEvento}m ${segAteOEvento}s`;

    if(distanciaDoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `já acabou :(`;
    }
}, 1000)