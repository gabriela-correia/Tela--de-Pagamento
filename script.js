document.getElementById('informarDados').addEventListener('click', function () {
    const valor = parseFloat(document.getElementById('valor').value);
    const metodo = document.querySelector('input[name="metodo"]:checked').value;

    if (isNaN(valor) || valor <= 0) {
        alert('Por favor, preencha o campo Valor com um número válido.');
        return;
    }

    if (metodo === 'pix') {
        document.getElementById('painelPix').style.display = 'block';
        document.getElementById('painelCartao').style.display = 'none';

        const desconto = valor * 0.1;
        const totalPix = valor - desconto;
        document.getElementById('totalPix').textContent = totalPix.toFixed(2);
    } else {
        document.getElementById('painelPix').style.display = 'none';
        document.getElementById('painelCartao').style.display = 'block';

        const parcelas = document.getElementById('parcelas');
        parcelas.addEventListener('change', function () {
            let total = valor;
            if (parcelas.value === '4') total += valor * 0.05;
            if (parcelas.value === '5') total += valor * 0.10;
            document.getElementById('totalCartao').textContent = total.toFixed(2);
        });
    }
});

document.getElementById('numeroCartao').addEventListener('input', function () {
    const numero = document.getElementById('numeroCartao').value;
    const bandeira = document.getElementById('bandeira');

    if (numero.startsWith('1234')) {
        bandeira.textContent = 'Bandeira: Visa';
    } else if (numero.startsWith('4321')) {
        bandeira.textContent = 'Bandeira: MasterCard';
    } else {
        bandeira.textContent = 'Número de cartão inválido';
    }
});

document.getElementById('pagarPix').addEventListener('click', function () {
    alert('Pagamento via Pix realizado com sucesso!');
});

document.getElementById('pagarCartao').addEventListener('click', function () {
    const numero = document.getElementById('numeroCartao').value.trim();
    const titular = document.getElementById('titular').value.trim();

    if (!numero || !titular) {
        alert('Preencha todos os campos do cartão.');
        return;
    }

    alert('Pagamento via Cartão realizado com sucesso!');
});
