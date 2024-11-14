function alert() {
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
      const success = loginForm.getAttribute("data-success");
      const error = loginForm.getAttribute("data-error");

      console.log("Success Message:", success);
      console.log("Error Message:", error);

      if (success) {
        Swal.fire({
          title: "Thành công!",
          text: success,
          icon: "success",
          confirmButtonText: "OK",
          imageUrl:
            "https://i.pinimg.com/564x/14/34/bd/1434bd07b0fed56df61215c46a005eef.jpg", // URL hình ảnh thành công
          imageWidth: 400, // Chiều rộng của hình ảnh
          imageHeight: 200, // Chiều cao của hình ảnh
          imageAlt: "Hình ảnh thành công", // Mô tả hình ảnh
          background: "#f0f8ff", // Màu nền
          color: "#333", // Màu chữ
          padding: "2em", // Khoảng cách bên trong
        });
      }

      // Hiển thị SweetAlert nếu có error
      if (error) {
        Swal.fire({
          title: "Thất bại!",
          text: error,
          icon: "error",
          confirmButtonText: "Thử lại",
          imageUrl:
            "https://i.pinimg.com/564x/e3/cb/03/e3cb03c92d7ca38c5c613092cd6587d5.jpg", // URL hình ảnh lỗi
          imageWidth: 400, // Chiều rộng của hình ảnh
          imageHeight: 200, // Chiều cao của hình ảnh
          imageAlt: "Hình ảnh lỗi", // Mô tả hình ảnh
          color: "#d33", // Màu chữ
          padding: "2em", // Khoảng cách bên trong
        });

        // Mở modal nếu có lỗi
        const loginModal = new bootstrap.Modal(
          document.getElementById("loginModal")
        );
        loginModal.show(); // Mở modal nếu có lỗi
      }
    }
  });
}

// Gọi hàm aler khi tài liệu được tải xong
if (typeof window !== "undefined") {
  alert();
}
