const data = [
    { selected: 0, label: '', value: [{ description: 'ตรงไปตรงมา' }, { description: 'ช่างพูด' }, { description: 'โอบอ้อมอารี' }, { description: 'เจ้าระเบียบ' }] },
    { selected: 0, label: '', value: [{ description: 'มั่นใจ' }, { description: 'เปิดเผย' }, { description: 'ไม่ชอบแข่งขัน' }, { description: 'พิธีรีตรอง' }] },
    { selected: 0, label: '', value: [{ description: 'เด็ดขาด' }, { description: 'ชอบสร้างสรรค์' }, { description: 'ยอมตามผู้อื่น' }, { description: 'อิงกฏ' }] },
    { selected: 0, label: '', value: [{ description: 'แน่วแน่' }, { description: 'เข้าสังคม' }, { description: 'ไม่ชอบขัดแย้ง' }, { description: 'มีวินัย' }] },
    { selected: 0, label: '', value: [{ description: 'กล้าเผชิญหน้า' }, { description: 'กระตือรือร้น' }, { description: 'ค่อยเป็นค่อยไป' }, { description: 'เน้นรายละเอียด' }] },
    { selected: 0, label: '', value: [{ description: 'ตัดสินใจเร็ว' }, { description: 'สนุกสนาน' }, { description: 'ดื้อเงียบ' }, { description: 'ต้องการความถูกต้อง' }] },
    { selected: 0, label: '', value: [{ description: 'ทำงานเร็ว' }, { description: 'อารมณ์ขัน' }, { description: 'โกรธยาก' }, { description: 'ชอบวิเคราะห์' }] },
    { selected: 0, label: '', value: [{ description: 'คล่องแคล่ว' }, { description: 'มองโลกแง่ดี' }, { description: 'สม่ำเสมอ' }, { description: 'เน้นเหตุผล' }] },
    { selected: 0, label: '', value: [{ description: 'เน้นผลลัพธ์' }, { description: 'เป็นมิตร' }, { description: 'ให้ความร่วมมือกับกลุ่ม' }, { description: 'สุขุม' }] },
    { selected: 0, label: '', value: [{ description: 'ชอบความท้าทาย' }, { description: 'โน้มน้าวจูงใจเก่ง' }, { description: 'ทำงานตามแผน' }, { description: 'รอบคอบ' }] },
    { selected: 0, label: '', value: [{ description: 'ชอบผจญภัย' }, { description: 'ชอบคิดริเริ่ม' }, { description: 'สุภาพอ่อนน้อม' }, { description: 'ครุ่นคิด' }] },
    { selected: 0, label: '', value: [{ description: 'ชอบแข่งขัน' }, { description: 'มีเสน่ห์เป็นที่รู้จัก' }, { description: 'เห็นอกเห็นใจ' }, { description: 'ชอบลงมือทำมากกว่าคิด' }] },
    { selected: 0, label: '', value: [{ description: 'ต้องการอำนาจ' }, { description: 'สนุก เบิกบาน' }, { description: 'เป็นผู้ฟังที่ดี' }, { description: 'จงรักภักดี' }] },
    { selected: 0, label: '', value: [{ description: 'ชอบจัดการปัญหา' }, { description: 'ขี้เล่น' }, { description: 'อดทน' }, { description: 'ยึดมั่นคำสัญญา' }] },
    { selected: 0, label: '', value: [{ description: 'มองภาพใหญ่' }, { description: 'เป็นที่ประทับใจผู้อื่น' }, { description: 'ใจเย็น' }, { description: 'ไม่เพ้อเจ้อ' }] },
    { selected: 0, label: '', value: [{ description: 'หงุดหงิดง่าย' }, { description: 'ชอบเป็นที่ชื่นชม' }, { description: 'เป็นคนว่านอนสอนง่าย' }, { description: 'ปฏิบัติตัวอยู่ในกรอบ' }] },
    { selected: 0, label: '', value: [{ description: 'พูดตรงๆ' }, { description: 'น่าคบ' }, { description: 'อะลุ้มอล่วย' }, { description: 'ไม่คุ้มค่า ไม่ทำดีกว่า' }] },
    { selected: 0, label: '', value: [{ description: 'กระฉับกระเฉง' }, { description: 'เข้ากับคนง่าย' }, { description: 'อ่อนโยน' }, { description: 'ไม่ชอบเสี่ยง' }] },
];

let selectedCount = {
    _1: 0,
    _2: 0,
    _3: 0,
    _4: 0,
}

export function select(score, index) {
    console.log('select score =', score, ', index =', index);

    let value = data[index].selected;
    if (value != 0 && value != score) return;

    let mode = data[index].selected == 0 ? 'add' : 'remove';
    console.log('mode =', mode, '| choice ' + (index + 1));
    if (value == 0) {
        data[index].selected = score;
    } else {
        data[index].selected = 0;
    }

    toggleButtons(score, index, mode);
    calculateScore();
}

document.addEventListener('DOMContentLoaded', () => {
    initChoice();

    document.getElementById("submit").addEventListener('click', () => submit())
});

function initChoice() {
    const choices = document.getElementById("content");
    // console.log(choices);

    data.forEach((element, index) => {
        // console.log(element);
        choices.innerHTML +=
            `<div id="choice_${index + 1}" class="container-fluid">
                                <label>ข้อที่ ${index + 1} : ${element.label}</label>
                                <div class="choices">
                                    <input class="btn btn-outline-danger choice" type="button" value="${element.value[0].description}" onclick="import('./script.js').then(module => module.select(1, ${index}))"/>
                                    <input class="btn btn-outline-warning choice" type="button" value="${element.value[1].description}" onclick="import('./script.js').then(module => module.select(2, ${index}))"/>
                                    <input class="btn btn-outline-info choice" type="button" value="${element.value[2].description}" onclick="import('./script.js').then(module => module.select(3, ${index}))"/>
                                    <input class="btn btn-outline-success choice" type="button" value="${element.value[3].description}" onclick="import('./script.js').then(module => module.select(4, ${index}))"/>
                                </div>
                            </div>`;
    });
}

function toggleButtons(score, index, mode) {
    if (mode == 'add') {
        const div = document.getElementById("choice_" + (index + 1)).querySelector('div').querySelectorAll('input');
        // console.log('toggle div list =',div);

        div.forEach((element, i) => {
            if (i == score - 1) {
                if (score == 1) {
                    element.classList.add('btn-danger');
                    element.classList.remove('btn-outline-danger');
                }
                if (score == 2) {
                    element.classList.add('btn-warning');
                    element.classList.remove('btn-outline-warning');
                }
                if (score == 3) {
                    element.classList.add('btn-info');
                    element.classList.remove('btn-outline-info');
                }
                if (score == 4) {
                    element.classList.add('btn-success');
                    element.classList.remove('btn-outline-success');
                }
            } else {
                element.classList.add('disabled');
                element.classList.add('readonly');
            }
        })
    } else {
        const div = document.getElementById("choice_" + (index + 1)).querySelector('div').querySelectorAll('input');
        div.forEach((element, i) => {
            if (i == score - 1) {
                if (score == 1) {
                    element.classList.add('btn-outline-danger');
                    element.classList.remove('btn-danger');
                }
                if (score == 2) {
                    element.classList.add('btn-outline-warning');
                    element.classList.remove('btn-warning');
                }
                if (score == 3) {
                    element.classList.add('btn-outline-info');
                    element.classList.remove('btn-info');
                }
                if (score == 4) {
                    element.classList.add('btn-outline-success');
                    element.classList.remove('btn-success');
                }
            } else {
                element.classList.remove('disabled');
                element.classList.remove('readonly');
            }
        })
    }
}

function calculateScore() {
    resetSelectedCount();
    data.forEach((element) => {
        if (element.selected == 0) return;
        element.selected == 1 ? selectedCount._1 += 1 :
            element.selected == 2 ? selectedCount._2 += 1 :
                element.selected == 3 ? selectedCount._3 += 1 : selectedCount._4 += 1;
    });

    let sumCount = selectCount();

    const currentSelected = document.getElementById("scoreboard");
    currentSelected.innerHTML = sumCount + "/18"
}

function submit() {
    if (selectCount() != 18) {
        console.warn('เลือกข้อมูลไม่ครบ!');
        Swal.fire({
            title: "มีบางอย่างผิดพลาด",
            text: "เลือกข้อมูลไม่ครบ โปรดกรอกข้อมูลให้ครบก่อนกดยืนยัน",
            icon: "warning"
        });
        return;
    }
    console.log('submitted');

    let summary = [selectedCount._1, selectedCount._2, selectedCount._3, selectedCount._4].sort((a, b) => b - a);
    console.log('summary =', summary);

    let maxValue = summary[0];

    let textList = [];
    if (selectedCount._1 == maxValue) {
        textList.push("สายบู้ (สีแดง)");
    } 
    if (selectedCount._2 == maxValue) {
        textList.push("สายอะเลิท (สีเหลือง)");
    } 
    if (selectedCount._3 == maxValue) {
        textList.push("สายนิ่ง (สีฟ้า)");
    } 
    if (selectedCount._4 == maxValue) {
        textList.push("สายเป๊ะเว่อร์ (สีเขียว)");
    }

    let textShow = '';
    console.log('textList.length=',textList.length);
    if (textList.length == 1) {
        textShow = textList[0];
    } else {
        textShow = textList.join(" และ ");
    }

    Swal.fire({
        title: "บุคลิกภาพของคุณคือ",
        text: textShow,
        icon: "success"
    });
}

function selectCount() {
    let result = selectedCount._1 + selectedCount._2 + selectedCount._3 + selectedCount._4;
    return result;
}

function resetSelectedCount() {
    selectedCount = {
        _1: 0,
        _2: 0,
        _3: 0,
        _4: 0,
    }
}