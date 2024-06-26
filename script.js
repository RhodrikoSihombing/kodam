
// daftar khodam tang bisa ditambah lagi
const khodamList = [
    "khodam macan putih bertelor Tiga",
    "khodam sanca berkepala kontol",
    "khodam Beruk Tobrut😮",
    "khodam Randi Racing Mandalikaa🤙",
    "khodam Putri Padang",
    "khodam Anjing berkontol Ganda",
    "khodam Tobrut BerTT Tiga",
    "khodam Anjing Tobrut Ber TT enam",
    "khodam Nyi Roro KIdul ga ber TT",
    "khodam anggrek mekar pontianak",
    "khodam Rawa Rontek",
    "khodam Pedang Berkontol",
    "khodam RusdiMus Prime💀💀",
    "khodam Ambatron 😈👿"

];

//fungsi untuk memilih khodam
function pilihkhodam(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent =""; //menghapus hasil sebelumnya
    if (nama) {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodamTerpilih = khodamList[randomIndex];
        resultDiv.textContent = `Nama Anda adalah ${nama} , Anda memiliki ${khodamTerpilih}.`;

        // menghapus hasil setelah 5 detik 
        setTimeout(() => {
            resultDiv.textContent = "";
        }, 10000);
} else {
    resultDiv.textContent = "Masukkan Nama Anda!!";
    }
}

//menambahkan event listner ke form
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("khodamForm").addEventListener("submit", pilihkhodam);
});
