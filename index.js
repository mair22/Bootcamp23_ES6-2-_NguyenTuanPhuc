document.querySelector('#signup-form .actions ul li:last-child a').onclick = () => {
    let btn = document.querySelector('#signup-form .actions ul li:last-child a');
    alert(btn.innerHTML);

    let arrInput = document.querySelectorAll(
      "#signup-form input, #signup-form select"
    );
    console.log("arrInput", arrInput);
  
    let khaiBao = {};
    for (let input of arrInput) {
      let { id, value, style } = input;
      khaiBao = { ...khaiBao, [id]: value };
    }
    console.log(khaiBao);
  
    let contentHTML = "";
    for (let key in khaiBao) {
      contentHTML += `
        <tr>
          <td>${key}</td>
          <td>${khaiBao[key]}</td>
        </tr>
      `;
    }
    document.querySelector("#signup-form div:last-child").innerHTML = contentHTML;
};
    