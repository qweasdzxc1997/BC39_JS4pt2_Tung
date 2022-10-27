// Bài 5
let btnHomQua = document.querySelector("#btnhqua");
let btnMai = document.querySelector("#btnmai");

const checkDate = (date, value) => {
  let getDate = new Date(date);
  console.log(date);

  if (value !== "homqua" && value !== "mai" && value !== "calc")
    return getDate !== "Invalid Date" && !isNaN(new Date(date));
  if (value === "homqua") getDate.setDate(getDate.getDate() - 1);
  if (value === "mai") getDate.setDate(getDate.getDate() + 1);
  if (value === "calc") {
    getDate.setMonth(getDate.getMonth() + 1);
    return getDate.getUTCDate();
  }

  return getDate;
};

const clickCheck = (value) => {
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;
  let infosapxep = document.querySelector("#infosapxep");

  if (year < 1920) return alert("Năm cần lớn hơn 1920!");

  let result = `${month}/${day}/${year}`;
  let isValidDate = checkDate(result);

  if (!isValidDate) return alert("Dữ liệu không hợp lệ!");

  return (infosapxep.innerHTML = checkDate(result, value).toLocaleDateString());
};

btnHomQua.addEventListener("click", () => clickCheck("homqua"));
btnMai.addEventListener("click", () => clickCheck("mai"));

// Bài 6
let btnTinh = document.querySelector("#btnTinh");

const calcDate = () => {
  let month2 = document.querySelector("#month2").value;
  let year2 = document.querySelector("#year2").value;
  let infosapxep2 = document.querySelector("#infosapxep2");

  if (year2 < 1920) return alert("Năm cần lớn hơn 1920!");
  let result = `${month2}/1/${year2}`;
  let isValidDate = checkDate(result);
  if (!isValidDate) return alert("Dữ liệu không hợp lệ!");

  return (infosapxep2.innerHTML = `Tháng ${month2}, Năm ${year2} có ${checkDate(
    result,
    "calc"
  )} ngày`);
};

btnTinh.addEventListener("click", () => calcDate());

// bai 7
let btnNumber = document.querySelector("#btnNumber");

const getText = (num) => {
  let intNumber = parseInt(num);
  if (intNumber === 9) return "Chín";
  if (intNumber === 8) return "Tám";
  if (intNumber === 7) return "Bảy";
  if (intNumber === 6) return "Sáu";
  if (intNumber === 5) return "Năm";
  if (intNumber === 4) return "Bốn";
  if (intNumber === 3) return "Ba";
  if (intNumber === 2) return "Hai";
  if (intNumber === 1) return "Một";
  if (intNumber === 0) return "Mươi";
};

const readNumber = () => {
  let number = document.querySelector("#number").value;
  let infosapxep3 = document.querySelector("#infosapxep3");

  let intNumber = parseInt(number);
  console.log(intNumber);
  if (intNumber > 999) return alert("Dữ liệu không hợp lệ!");
  if (intNumber > 100 && intNumber <= 999) {
    if (number.charAt(1) === "0" && number.charAt(2) === "0")
      return (infosapxep3.innerHTML = `${getText(number.charAt(0))} trăm`);
    if (number.charAt(1) === "0" && number.charAt(2) !== "0")
      return (infosapxep3.innerHTML = `${getText(
        number.charAt(0)
      )} trăm lẻ ${getText(number.charAt(2))}`);
    if (number.charAt(1) !== "0" && number.charAt(2) === "0")
      return (infosapxep3.innerHTML = `${getText(
        number.charAt(0)
      )} trăm ${getText(number.charAt(1))} mươi`);
    return (infosapxep3.innerHTML = `${getText(
      number.charAt(0)
    )} trăm ${getText(number.charAt(1))} mươi ${getText(number.charAt(2))}`);
  }
  if (intNumber > 10 && intNumber <= 99) {
    if (number.charAt(1) === "0")
      return (infosapxep3.innerHTML = `${getText(number.charAt(0))} mươi`);
    return (infosapxep3.innerHTML = `${getText(
      number.charAt(0)
    )} mươi ${getText(number.charAt(1))}`);
  }

  return (infosapxep3.innerHTML = `${getText(number.charAt(0))}`);
};

btnNumber.addEventListener("click", () => readNumber());

// bai 8
let btnTim = document.querySelector("#btnTim");

const getStudentArr = () => {
  let ten = document.querySelector("#ten").value;
  let ten2 = document.querySelector("#ten2").value;
  let ten3 = document.querySelector("#ten3").value;

  let x = parseInt(document.querySelector("#toado-x").value);
  let x2 = parseInt(document.querySelector("#toado-x2").value);
  let x3 = parseInt(document.querySelector("#toado-x3").value);

  let y = parseInt(document.querySelector("#toado-y").value);
  let y2 = parseInt(document.querySelector("#toado-y2").value);
  let y3 = parseInt(document.querySelector("#toado-y3").value);
  return [
    {
      name: ten,
      x: x,
      y: y,
    },
    {
      name: ten2,
      x: x2,
      y: y2,
    },
    {
      name: ten3,
      x: x3,
      y: y3,
    },
  ];
};

const findLocation = () => {
  let arrStudent = getStudentArr();
  let xSchool = parseInt(document.querySelector("#toado-xSchool").value);
  let ySchool = parseInt(document.querySelector("#toado-ySchool").value);
  let result = document.querySelector("#infosapxep4");

  let schoolLocation = Math.pow(ySchool - xSchool, 2);
  console.log({ schoolLocation, ySchool, xSchool });

  let furtherStudent = arrStudent?.map((item) => {
    let studentLocation = Math.pow(item?.y - item?.x, 2);
    return {
      name: item?.name,
      distance: Math.sqrt(studentLocation + schoolLocation),
    };
  });

  if (
    furtherStudent[0].distance > furtherStudent[1].distance &&
    furtherStudent[0].distance > furtherStudent[2].distance
  )
    return (result.innerHTML = `Sinh viên xa trường nhất: ${furtherStudent[0].name}`);
  if (
    furtherStudent[1].distance > furtherStudent[0].distance &&
    furtherStudent[1].distance > furtherStudent[2].distance
  )
    return (result.innerHTML = `Sinh viên xa trường nhất: ${furtherStudent[1].name}`);
  if (
    furtherStudent[2].distance > furtherStudent[1].distance &&
    furtherStudent[2].distance > furtherStudent[1].distance
  )
    return (result.innerHTML = `Sinh viên xa trường nhất: ${furtherStudent[2].name}`);

    if (furtherStudent[0].distance === furtherStudent[1].distance && furtherStudent[1].distance === furtherStudent[2].distance) return (result.innerHTML = `Sinh viên xa trường nhất: c`); 
};

btnTim.addEventListener("click", () => findLocation());
