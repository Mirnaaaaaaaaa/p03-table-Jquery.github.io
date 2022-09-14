$(document).ready(function () {
    $("#nama_1").click(function () {
        confirm("Kamu Memilih Lilis, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Lilis");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_2").click(function () {
        confirm("Kamu Memilih Layla, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Layla");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_2").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_3").click(function () {
        confirm("Kamu Memilih Niken, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Niken");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_4").click(function () {
        confirm("Kamu Memilih Fattah, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Fattah");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#nama_5").click(function () {
        confirm("Kamu Memilih Hilman, Apakah Kamu Ingin Mengubahnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Hilman");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Belum Masukan Nama......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("nama_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_1").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Sarajaya");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_1").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_2").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Losari");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_2").innerHTML = nama;
        }
    });
});


$(document).ready(function () {
    $("#alamat_3").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Depok");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_3").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_4").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Sukadana");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_4").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("#alamat_5").click(function () {
        confirm("Apakah Kamu Ingin Merubah Alamatnya ?");
        if (confirm) {
            let nama;
            let prompt_nama = prompt("Masukan Nama Sesukamu.....", "Waled");
            if (prompt_nama == null || prompt_nama == "") {
                alert("Kamu Tidak Merubah Apapun......");
            } else {
                nama = prompt_nama;
            }
            document.getElementById("alamat_5").innerHTML = nama;
        }
    });
});

$(document).ready(function () {
    $("button").click(function () {
        alert('Maap kamu gk diajak tau')
    });
});