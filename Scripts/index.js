// charset: UTF-8

function Alerta(Titulo, Mensagem, Aceitar, Cancelar, Tipo, Confirmacao) {
    window.scrollTo(0, 0)
    // Tira o scroll da pagina
    document.querySelector('body').style.overflow = 'hidden'

    // Verifica o tipo de alerta para colocar seu icone correspondente

    if (Tipo == 'Aviso') {
        document.querySelector('[name=IconeAlerta]').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEEUlEQVRoge2az29UVRTHP+e9N622pbYFAcWFSsNMUo0S0P6IttbExETjBjEBg4lxY4IWidH4J7hQQlM2mq5oDDGoK0zcaVHqAA2aQGPbYOmiKlZtEVpop2/ecTGNhnlv5v3s2MV8dj3n3Hu+J/PevfedW6hSpUo5JMnJdHTHJtToAdmJo2mEuxEaCk4WEJkFJlG9gDIs7eN/JZU7diGabW3EMF8GOQC0A0bAoQ6QRThO3j4hHZevx9ERuRAdffAutPYd1DkI0hRHBMI8ygCO/WHUgiIVoufSL4EcBe6JMr4MvyJ6SB6b+CzswFCF6OiuOpzFY8CrYROFQwexF/uka+ZW0BGBC9FvH26mduUU0BVJW2jkHEb+Odk9+Weg6CBBejazEWEYaIulLTyXsM0e6Rqb8wv0XWF0dFcd8CWVLwLgIaz8KR25706/QP+l0lk8htCeiKxodGI19PsFlX20VlenT6NkX1oRTmabb7Pt7ZjnjpRGmQ5E95ZbzUoWUtjorJ+Ae6PkvbZo8ez722+zffXezzTV21GmA7iKkcvI7qm/vZylHy0z9S4Ri1gjtpKvOVzK6VlIYdd2Dq6dpogY9Gm2tdHb5YWT2h/72LEWKM2Y1j4vV4lHSw6spZ5YKJ7aXIXo2cxG+F+XWz86dXTHpmKj+xcxtNfTvn4wcIxut9Ed92gl1MTkkWKDuxBH0xWREgvJFFvchYhuqYiWWOjmYovHoyUNlZASE9desp5f6lB4FKILlZcRGtd3vcc7YlytiJRY6O/FFssjajKJVI11eT4/fMVlSwaZKLZ4FKI/JJHKEGVbSy6Jqdyo/OjK5wpy+IZC82y94pA3houNrkJW25jZikiKgsqIVzPC6x0B1SFEYrd9fruW4vjpFgR4pXuOrU0rcacEQ4e8zJ6fupptbcS0plGavfxB2T/wAFOzNQBs37LMJ29Mx5kOYI6c3i9PTNwodnhuiNJx+TrKQJyMOVu48kfNv39PzdaSs2P3zPu9ioByO3tOPwB+iZqxxlK6M//trT2ZBWqsiB2UAjPUm0dKOcu3g86nX0TlZNTMdl74eqxwdOttW8AyYxWyRx4f/6KU0/e31vPpQVRei6MgNspH0j7+erkQ/0PjyuKbwPdJaYrAGW4uveUX5FuIdM3cwjafBy4lIiscF7HNF6R3eskvMNAxXrrG5lhOdQNnYksLinIWw3k6SCceQnyPyJMX57EXngEdjK4uMB9zc+mpoHcjEPXqrbCaHQW2RRlfhhngULnVqRTRL0O/S28gJW9j0Bf3BADMAf3Um0ekbSzSh10y19OmtW+1A9hJmOtplREMHWJZT5TasYOS7D8MjLS1YDo9iLMTjDToZoQNBSc3QGbBmUCNC+SN00Ff5CpVqsTnH/A5NL/gT5rQAAAAAElFTkSuQmCC';
    } else if (Tipo == 'Erro') {
        document.querySelector('[name=IconeAlerta]').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAE+ElEQVRoge2ZTWxUVRTHf2fevDdTygBVHLZgDLiqLdCStKNMEJvospBUKo2LbqCQICohxrDCEKMoIcbKookffFgSYGmjEVM0EVrEoisgRnSFUIXSVmDem3nXxbRA570372OGxkV/q8m9Z+45/9yPc+59MMccc5RDqjnYRFtLmnx+LUJDDJYrSCPUAmAzKcKoDVdARjDMM6mBkdFq+a5YyFgmU6clzc2i6AJWhxhTIQwrJYfzhdzRusGLY5XEEVnIWCZTF0+au1H0AKlKggDGQX1sFaz3ogqKJGRy3ZouRO0H0lH+X4broN6Yf/r80bB/DCVktLU1VZOwDiF0hnUUCuHwnfy8nvTg4GTwvwRkoq0lLQVrAGRltOhCIlxQsfhLqW9+vBHMPABFEfnvgRUVBReey8qwng1yusX8DEZbW1PFmZh1EQArxNS/Um31tX6GvkJqkvneWVtO7qz+t5Do8zMqK2Ry3ZouUJurF1NU5OXJ9c1lDxjPPTKWydTFE+Ylqn/ERuW6VTCf9soznjMST5q7+f+IAFgS14xdXp2uQsYymToUW8N40Rqb0Ns7Atvr7R1ojU1hXCCw7Va2YZFbX9w1qKS5GcWCoA60+kaSe9+HZA0kklhffl7WXt+wCWPra5DLcW/PmxR+Hg7qamFc0zuB3tIO1xmZKgADodU3ktx3oCgCMLp70De96ml/XwRAIkFy7360lc1B3QHiGptDyERbS5piFRuI2FPL74uYxujuQd/oPGT0jZ0PREyTSBBbuiyoOwTWjGdXLXbE4bC0rSwhShfr1HHMTw442o0tO2bMjL5hE8aWHQ47s68X69TxoO4ARLR4trTRuUeUPBNmVADrZD8AxtadM9qN7p7iD9N0zgRTIvrL7ycP6oETDzc4hEzd7ELjK6aECkQgSjnKJcfSUrAk0ugUxbgts1IqEQGAKEd+czu15kf34C+mYhFFHKnBt2iMRpmzoqrPHQ9wExL4VubGjDzhgl+eCch4aYNDiMD1qKP7iZimYjFKHLdGh5Diu1N4vESYfb3ueaYCMUrkcmmbSx7hYth1XE7Ewxvb62j2q80cCL+UNjn3SMIaBAKnEr29w13EoYMzRFgn+zEPHXTYGd09oapmwFb5/JnSRoeQ1MDIKELgctT+7Qrq7t0ZbWZfL9aJYw5b68Qx5zLL5bD/uBrUHQrOLRi88Hdpu+vxq2yOBB248OsIubd33hfjlydm5JnwZTwxxWG3dtfdcCvbsEjXjD9xSTxeaI1NxJY9GbgA1Ns7sK/+TmHkfFAXAGOmFJY+9u2F26Udntt68vmmfSBvhfHyqFFK3kl9N7THrc8zs+eM2LvAtUcWVXj+ytu5D7w6PYU8PjA0Dsrzsj/bKGRnuZf6srXW1Kv4F1WPKiyiPk2dHuovZ+JbNN4pzNsG/FS1oEIjw7U19nZfqyBDTbzY+ISY+g/M9vuvkksqYT5XlUdsKCbJQlxrUXC28ugCc17FtbVBvzMGvo8s/PrszfnavRcQ94RUXeSz2nmFbNBvIxD109v65k4UH1LBtdiDawp53W9juxH5vnYr27Aorhm7BLYTogLw4LZS8pEVy+93y9pBqPjieXP9qoW6ir0C0iXQTPDlais4h6gjFvaxqAKmqeoNejy7arHE42uxaRDUckSlESl+ulZqAiU3FHKFmD2ilJxZcHr4n2r6n2OOObz5D2SjvPq1tcPWAAAAAElFTkSuQmCC';
    } else if (Tipo == 'Sucesso') {
        document.querySelector('[name=IconeAlerta]').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEw0lEQVRoge2a228UdRTHP2c6s+1S6S24RKOJpggkEqmEYCIgPAiJNC1tIxWxBHhFXtQQ/gVj0Bej8cHES7koTdgSCiuJD6JBSAWhamJpE9OEBCi3ABKlOzt7fGCRZeeys7OT6kO/j7/r+ew5c+b8frMwoxnNKEgS52LdB7tTWVhlQJvCfIGUitYXuu+gclVgTI38WSebOJ7pHbga195Vg7QPtTdjW30Cm4GlFaypAsOq0m+K7h3sHrxZjR2RQdqH2puNbGKXim4HZldjBHAb+MiE96ICRQLpSHdtVtgNpKLMD9AkKu8M9aT3VjqxIpDOQ52z83njE2BTpRtVqP6kbW0f6B24E3ZCaJDug90pWzQDLIlkWuU6Y6msS/ekr4QZHAqkAPE9sKAq0yrXece2VobJbka5AZ2HOmcXPDHdEAALDMs+uvbY2vpyA8uCaN74mOkLJ5cElib+Tn5ablwgSCE79cVnVkSpbOwYXB+YYHyfkfah9maxrVHiT7FRNWnCQr/3jK9HjGxiF9MMMS/VwqInfLec66js9Ov09EjBGxNAQwz2hVJrqoXXX1hEjSEM/jzKyIVJ1xiBWzXwlJdXvD1iW338BxBmjYGI0LVkIYufnOsap9DoiHo+K54ghQJwWjSvCOLf/UV4vMn7d1Qf21yhVXj5Xfbqi1utHhAApycucuTcOIp6TVMxndThjsPXihtdHsmJrub/CwEg6hirSxvdoaWyOA5Dg1QFBACi8lxpmwtEYX61hgapWgiAvEe55PaIqDtd+Ki+1qJpVl3Y4Z4PNsDwH+EhAMTj/eaVtR4Js1h9rcWW5W1sW9lGc315mNZUCxt9PJH5JTxEQa6UVrZo9NJ9iFRDPY3JOrauCIaJI5zKyQuk7KlszbOtpBoeVNaNyTq2LG/zDLNn5sYTTiW6XdrglbXctUGJjo6MM3H94SqhaVadK8xaUy28tswNcWbiUpRwemAiuE6NLhCBsXILZR2HfT/+6oIpDjO/cDozcYmhc2NVhZMB5z3aHlYezoVZLOs47D/5GxduPOzlxmQd21Y87xtO1UIUNFLa4AbJmd9BuJ2mcjn6T4y4PNOQrI09nIpNxHSOlza6QDK9A1cFhsOu6hdmxYojnIp0qrTOAp/0q7CnkpWDYGKGAJV+r2ZPEPMeiCvFBckLJnYIuHk3Z+736qjxahz9evTu/I0LG4CVleziqPL7xWs8PaeJ8ckbcUMA7P7m1YMZrw7T16jaqXfNqdqtCo9VstNULscXJ0bIOfl4IUQvmyrv+3X7liiZdZnbGnDYD5LtOHF7As0bbwXd1AfWWkM96b2ofBmrRVGk8tmRnvRXQUPKFo3JnPmmwun4rKpYw2LldpQbFOpI+8qBDY/WWPYPTPf9r+iok028FMslNtx7Sdq29SJwsmrjwusnK2+sCvudMfR55FjvwI3srL/WAJ4vpDil8LmYzuqw30Yg6qe3wfWbVOUDIPSxOKQxl/Iqb5d7sH3mRlNXuqvJUdmpojuo8lZS4JbCh3dta/e3vQO3Iq5RnV4+sKExmci+obAZlWWED9c8cEphz5Rt7YsKcF+xXsR1HO6YQ65mlRb9YYAHn67/VLgiMKYqZxNwPN2Tvh7n/jOa0Yz89Q8zdP1pPObXZgAAAABJRU5ErkJggg==';
    } else {
        document.querySelector('[name=IconeAlerta]').src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAEOklEQVRoge2a30+bVRjHP0/fMsZYgaopMTGEwQK6GF0M8WKJwo03i1d64+aIXpgQBiFBsxiz/0AXl6grLnGRCFMv1MvtVrzYFpyZxixhhC0kMoXhoIPCKH3bx4t2yvq+bd9frZr0c9fnnPc8z7c95znPOW+hRo0apZAgB+scW49llV7gIEIXEENpzDcnEZZRZlGuGRmm5kYiy0H59i2kLZ6IGhjHQPtBelyMqSDToBOaMs/Pj0YTfuLwLKQtnoiGCb+r6HEg4icIYE2RM6TS73sV5EnIvrFkP6qngJiX54uiLElI3rk1uPe820ddCek+txxJpXZ/KnDUrSN36MQe3Tp+fSiWdPqEYyGdY+sxhYuqPOctONf8FBIO3xyM3HHS2ZGQfDb6Aej2FZp7bhgmLzjJbqFyHbrPLUcULlJ9EQDdGUMvtH6w2FiuY1kh26n6eBWnkxWRnsbGxs/KdSspZN9Ysh/kWHBReUPhtY54smSCKbpG8hvdDD5SbEMYXmwLg8LUbyZbpteRAGVJt80ni+0z4WLP5Tc7zyKa6oVvX2mgsyX3o8+tZnn1u/usb6u3AYVWqQ+fAE7aNdtOrbZ4IqrooDePOY4cqPtbBMD+aIgjB+r8DAkw1H56tcWuwVZIrnaiyY/Hlnob224/IwLQHNoVtl0rRRa79vv1eOGmSSb7z+dMNmfziwq2sVkWe37zW7Rrc8uhJwzeeDo3ncZ/TXP5dsbvkABaZ2hsdqDpz51Gy2LPQh8BnVMuLWS4tBBI8DuRtCl9wDc7jdappTwbtOcK8EyhwZp+hS48ZsiHh8ml4J2spTSIocGmXLIKUVqD8BRtEK6++XCJ1DO+wcr9QL4ly/5ml7X2+vdUWUSsW0PZovH/gp0Qx6eyfwtV1gptViHCUlWi8YNiOTXapd/ZqgTjjxuFBrup9XMVAvGFhPil0GYRYph8D0Gl+4qQDYd0qtBoEZI76Mt0dWJyj8KVwjoLiqVf0cmKR+SdCTujrRDdMifBmuL+AyRCRvoruwbbo+78aDTRHk+eEfQ9rx43tpWTUymLzSef3Bp45J5dQ9Fyff9Hd5sy4V0zwON+vQfEoqbMp4pdPhQtUeZGHl0TkROVi8sdKoyWuqkvWWvlbsX1i+DDcocin88PRr4u1ads0bhHt4ZQvRpcWG6R6W2jcbhcr7JCrg/FkkZGDmNTFlQcZcYw9eXfB2SzXFdHZfzcSGQ5vSt7COWy/+icoj+GQvQ6fc/o+Dyy8FbzyubmxkugthtSkIjIeMqI9Dl9NwIeb0s64smjqvohEsyxeAd/qPB2uYVth+drn/bTqy35u9hhfN5KAveAj8VInyq24ZXD9/1Vx9mVZsy61/M3gM/jfLpmFa6EhElC6S+9CnhAoH8Y6Dq79piZlV5VDqJ05W87Hry6Xke5gzAryrWU6tTt4aa7QfqvUaNGcf4C2DpcRjiXsYIAAAAASUVORK5CYII=';
    }

    // Ativa o fundo com a sombra e mostra a caixa de alerta
    document.querySelector('.Fundo').style.display = 'flex';

    document.querySelector('[name=TituloAlerta]').textContent = Titulo;
    document.querySelector('[name=TextoAlerta]').textContent = Mensagem;

    // Verifica o tipo de alerta para configurar os botões
    if (Confirmacao != true) {
        document.querySelector('[name=Aceitar]').focus();
        document.querySelector('[name=Aceitar]').textContent = 'Sim';
        document.querySelector('[name=Cancelar]').style.display = 'block';

        document.querySelector('[name=Aceitar]').setAttribute('onClick', 'javascript: ' + Aceitar);
        document.querySelector('[name=Cancelar]').setAttribute('onClick', 'javascript: ' + Cancelar);
    } else {
        document.querySelector('[name=Aceitar]').focus();
        document.querySelector('[name=Aceitar]').textContent = 'Ok';
        document.querySelector('[name=Aceitar]').setAttribute('onClick', 'javascript: ' + Aceitar);
        document.querySelector('[name=Cancelar]').style.display = 'none';
    }

}

function FecharAlerta() {
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('.Fundo').style.display = 'none';
}

function RightMenu(Tipo) {
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('.shadow').classList.remove('hide');
    document.querySelectorAll('.RightMenu')[Tipo].classList.add('rightIn');
    document.querySelectorAll('.RightMenu')[Tipo].classList.remove('rightOn');
    document.querySelectorAll('.RightMenu')[Tipo].style.right = 0;
}

function CloseRightMenu(Tipo) {
    document.querySelectorAll('.RightMenu')[Tipo].classList.remove('rightIn');
    document.querySelectorAll('.RightMenu')[Tipo].classList.add('rightOn');
    document.querySelectorAll('.RightMenu')[Tipo].style.right = '-350px';
    document.querySelector('html').style.overflow = 'auto';
    document.querySelector('.shadow').classList.add('hide');
}

function CloseLGPD() {
    document.querySelector('.Temp').innerHTML = '';
    localStorage.setItem('LGPD', 'Visualizado: ' + Date.now());
}

if (!localStorage.getItem('LGPD')) {
    document.querySelector('.Temp').innerHTML = `
    <div class="LGPD">
        <p>Utilizamos cookies para aprimorar a sua experiência. Ao navegar você concorda com nossa política de cookies. <a class="Link" href="` + localStorage.getItem('place') + `Documentos/Privacidade.pdf" target="_blank"><strong>Saiba mais</strong></a></p>
        <close onclick="CloseLGPD()">X</close>
    </div>
    `;
}

document.querySelector('.footer').innerHTML = `
<line></line>
<div class="set">
    <div class="urls">
        <img src="` + localStorage.getItem('place') + `Estilo/Icones/Dark/24x24.png">
        <line></line>
        <p style="font-size: 12px;">ALL RISK SOLUCOES CORPORATIVA LTDA</p>
        <p style="font-size: 12px;">CNPJ: 09.288.202/0001-55</p>
    </div>
    <set></set>
    <div class="urls">
        <p><strong>Documentos</strong></p>
        <line></line>
        <a class="Link" target="_blank"  href="` + localStorage.getItem('place') + `Documentos/Privacidade.pdf">Política de privacidade</a><br>
    </div>
    <set></set>
    <div class="urls">
        <p><strong>E-mails</strong></p>
        <line></line>
        <a class="Link" href="mailto:suporte@allrisk.com.br">Suporte</a><br>
    </div>
    <set></set>
</div>
<line></line>
<p style="padding: 20px;font-size: 12px; width: 90%;">
escreva aqui
</p>
<line></line>
`;
