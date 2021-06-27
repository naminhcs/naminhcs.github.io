const vni = " AaĂăÂâBbCcDdĐđEeÊêGgHhIiKkLlMmNnOoÔôƠơPpQqRrSsTtUuƯưVvXxYyÁáÀàẢảÃãẠạĂăẮắẰằẲẳẴẵẶặÂâẤấẦầẨẩẪẫẬậĐđÉéÈèẺẻẼẽẸẹÊêẾếỀềỂểỄễỆệÍíÌìỈỉĨĩỊịÓóÒòỎỏÕõỌọÔôỐốỒồỔổỖỗỘộƠơỚớỜờỞởỠỡỢợÚúÙùỦủŨũỤụƯưỨứỪừỬửỮữỰựÝýỲỳỶỷỸỹỴỵFfJjZzWw`1234567890-=~!@#$%^&*()_+{}|[]:;<>?,./";
const iconKey = ['1f600', '1f603', '1f604', '1f601', '1f606', '1f605', '1f923', '1f602', '1f642', '1f643', '1f609', '1f60a', '1f607', '1f970', '1f60d', '1f929', '1f618', '1f617', '1f61a', '1f619', '1f60b', '1f61b', '1f61c', '1f92a', '1f61d', '1f911', '1f917', '1f92d', '1f92b', '1f914', '1f910', '1f928', '1f610', '1f611', '1f636', '1f60f', '1f612', '1f644', '1f62c', '1f925', '1f60c', '1f614', '1f62a', '1f924', '1f634', '1f637', '1f912', '1f915', '1f922', '1f92e', '1f927', '1f975', '1f976', '1f974', '1f635', '1f92f', '1f920', '1f973', '1f60e', '1f913', '1f9d0', '1f615', '1f61f', '1f641', '1f62e', '1f62f', '1f632', '1f633', '1f97a', '1f626', '1f627', '1f628', '1f630', '1f625', '1f622', '1f62d', '1f631', '1f616', '1f623', '1f61e', '1f613', '1f629', '1f62b', '1f971', '1f624', '1f621', '1f620', '1f92c', '1f608', '1f47f', '1f480', '1f4a9', '1f921', '1f479', '1f47a', '1f47b', '1f47d', '1f47e', '1f916', '1f63a', '1f638', '1f639', '1f63b', '1f63c', '1f63d', '1f640', '1f63f', '1f63e', '1f648', '1f649', '1f64a', '1f48b', '1f48c', '1f498', '1f49d', '1f496', '1f497', '1f493', '1f49e', '1f495', '1f49f', '1f9e1', '1f49b', '1f49a', '1f499', '1f49c', '1f90e', '1f5a4', '1f90d', '1f4af', '1f4a2', '1f4a5', '1f4ab', '1f4a6', '1f4a8', '1f435', '1f412', '1f98d', '1f9a7', '1f436', '1f415', '1f9ae', '1f429', '1f43a', '1f98a', '1f99d', '1f431', '1f408', '1f981', '1f42f', '1f405', '1f406', '1f434', '1f40e', '1f984', '1f993', '1f98c', '1f42e', '1f402', '1f403', '1f404', '1f437', '1f416', '1f417', '1f43d', '1f40f', '1f411', '1f410', '1f42a', '1f42b', '1f999', '1f992', '1f418', '1f98f', '1f99b', '1f42d', '1f401', '1f400', '1f439', '1f430', '1f407', '1f97d', '1f97c', '1f9ba', '1f454', '1f455', '1f456', '1f9e3', '1f9e4', '1f9e5', '1f9e6', '1f457', '1f458', '1f97b', '1fa71', '1fa72', '1fa73', '1f459', '1f45a', '1f45b', '1f45c', '1f45d', '1f40a', '1f422', '1f98e', '1f40d', '1f432', '1f409', '1f995', '1f996', '1f433', '1f40b', '1f42c', '1f41f', '1f420', '1f421', '1f988', '1f419', '1f41a', '1f40c', '1f98b', '1f41b', '1f41c', '1f41d', '1f332', '1f333', '1f334', '1f335', '1f33e', '1f33f', '1f347', '1f348', '1f349', '1f34a', '1f34b', '1f34c', '1f34d', '1f96d', '1f34e', '1f34f', '1f350', '1f351', '1f352', '1f353', '1f951']
const icon = ['\u{1f600}', '\u{1f603}', '\u{1f604}', '\u{1f601}', '\u{1f606}', '\u{1f605}', '\u{1f923}', '\u{1f602}', '\u{1f642}', '\u{1f643}', '\u{1f609}', '\u{1f60a}', '\u{1f607}', '\u{1f970}', '\u{1f60d}', '\u{1f929}', '\u{1f618}', '\u{1f617}', '\u{1f61a}', '\u{1f619}', '\u{1f60b}', '\u{1f61b}', '\u{1f61c}', '\u{1f92a}', '\u{1f61d}', '\u{1f911}', '\u{1f917}', '\u{1f92d}', '\u{1f92b}', '\u{1f914}', '\u{1f910}', '\u{1f928}', '\u{1f610}', '\u{1f611}', '\u{1f636}', '\u{1f60f}', '\u{1f612}', '\u{1f644}', '\u{1f62c}', '\u{1f925}', '\u{1f60c}', '\u{1f614}', '\u{1f62a}', '\u{1f924}', '\u{1f634}', '\u{1f637}', '\u{1f912}', '\u{1f915}', '\u{1f922}', '\u{1f92e}', '\u{1f927}', '\u{1f975}', '\u{1f976}', '\u{1f974}', '\u{1f635}', '\u{1f92f}', '\u{1f920}', '\u{1f973}', '\u{1f60e}', '\u{1f913}', '\u{1f9d0}', '\u{1f615}', '\u{1f61f}', '\u{1f641}', '\u{1f62e}', '\u{1f62f}', '\u{1f632}', '\u{1f633}', '\u{1f97a}', '\u{1f626}', '\u{1f627}', '\u{1f628}', '\u{1f630}', '\u{1f625}', '\u{1f622}', '\u{1f62d}', '\u{1f631}', '\u{1f616}', '\u{1f623}', '\u{1f61e}', '\u{1f613}', '\u{1f629}', '\u{1f62b}', '\u{1f971}', '\u{1f624}', '\u{1f621}', '\u{1f620}', '\u{1f92c}', '\u{1f608}', '\u{1f47f}', '\u{1f480}', '\u{1f4a9}', '\u{1f921}', '\u{1f479}', '\u{1f47a}', '\u{1f47b}', '\u{1f47d}', '\u{1f47e}', '\u{1f916}', '\u{1f63a}', '\u{1f638}', '\u{1f639}', '\u{1f63b}', '\u{1f63c}', '\u{1f63d}', '\u{1f640}', '\u{1f63f}', '\u{1f63e}', '\u{1f648}', '\u{1f649}', '\u{1f64a}', '\u{1f48b}', '\u{1f48c}', '\u{1f498}', '\u{1f49d}', '\u{1f496}', '\u{1f497}', '\u{1f493}', '\u{1f49e}', '\u{1f495}', '\u{1f49f}', '\u{1f9e1}', '\u{1f49b}', '\u{1f49a}', '\u{1f499}', '\u{1f49c}', '\u{1f90e}', '\u{1f5a4}', '\u{1f90d}', '\u{1f4af}', '\u{1f4a2}', '\u{1f4a5}', '\u{1f4ab}', '\u{1f4a6}', '\u{1f4a8}', '\u{1f435}', '\u{1f412}', '\u{1f98d}', '\u{1f9a7}', '\u{1f436}', '\u{1f415}', '\u{1f9ae}', '\u{1f429}', '\u{1f43a}', '\u{1f98a}', '\u{1f99d}', '\u{1f431}', '\u{1f408}', '\u{1f981}', '\u{1f42f}', '\u{1f405}', '\u{1f406}', '\u{1f434}', '\u{1f40e}', '\u{1f984}', '\u{1f993}', '\u{1f98c}', '\u{1f42e}', '\u{1f402}', '\u{1f403}', '\u{1f404}', '\u{1f437}', '\u{1f416}', '\u{1f417}', '\u{1f43d}', '\u{1f40f}', '\u{1f411}', '\u{1f410}', '\u{1f42a}', '\u{1f42b}', '\u{1f999}', '\u{1f992}', '\u{1f418}', '\u{1f98f}', '\u{1f99b}', '\u{1f42d}', '\u{1f401}', '\u{1f400}', '\u{1f439}', '\u{1f430}', '\u{1f407}', '\u{1f97d}', '\u{1f97c}', '\u{1f9ba}', '\u{1f454}', '\u{1f455}', '\u{1f456}', '\u{1f9e3}', '\u{1f9e4}', '\u{1f9e5}', '\u{1f9e6}', '\u{1f457}', '\u{1f458}', '\u{1f97b}', '\u{1fa71}', '\u{1fa72}', '\u{1fa73}', '\u{1f459}', '\u{1f45a}', '\u{1f45b}', '\u{1f45c}', '\u{1f45d}', '\u{1f40a}', '\u{1f422}', '\u{1f98e}', '\u{1f40d}', '\u{1f432}', '\u{1f409}', '\u{1f995}', '\u{1f996}', '\u{1f433}', '\u{1f40b}', '\u{1f42c}', '\u{1f41f}', '\u{1f420}', '\u{1f421}', '\u{1f988}', '\u{1f419}', '\u{1f41a}', '\u{1f40c}', '\u{1f98b}', '\u{1f41b}', '\u{1f41c}', '\u{1f41d}', '\u{1f332}', '\u{1f333}', '\u{1f334}', '\u{1f335}', '\u{1f33e}', '\u{1f33f}', '\u{1f347}', '\u{1f348}', '\u{1f349}', '\u{1f34a}', '\u{1f34b}', '\u{1f34c}', '\u{1f34d}', '\u{1f96d}', '\u{1f34e}', '\u{1f34f}', '\u{1f350}', '\u{1f351}', '\u{1f352}', '\u{1f353}', '\u{1f951}'];

function emojiUnicode(emoji) {
    var comp;
    if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
    }
    comp = (
        (emoji.charCodeAt(0) - 0xD800) * 0x400 +
        (emoji.charCodeAt(1) - 0xDC00) + 0x10000
    );
    if (comp < 0) {
        comp = emoji.charCodeAt(0);
    }
    return comp.toString("16");
}

function convertIconToText(s) {
    let leng = s.length / 2;
    let ans = "";
    for (let i = 0; i < leng; i++) {
        let valIcon = s[i * 2] + s[i * 2 + 1];
        let valText = emojiUnicode(valIcon);
        for (let j = 0; j < iconKey.length; j++) {
            if (valText === iconKey[j]) {
                ans = ans + vni[j];
                break;
            }
        }
    }
    return ans;
}

function convertTextToIcon(s) {
    let res = "";
    for (i in s) {
        for (j in vni) {
            if (s[i] === vni[j]) {
                res = res + icon[j];
                break;
            }
        }
    }
    return res;
}

function checkInputText(s) {
    for (let j = 0; j < s.length; j++) {
        let checker = false;
        for (let i = 0; i < vni.length; i++) {
            if (s[j] === vni[i]) {
                checker = true;
                break;
            }
        }
        if (checker === false) {
            return false;
        }
    }
    return true;
}

function checkInputIcon(s) {
    for (let i = 0 ; i < s.length; i++){
        if (s[i] === '\t'){
            console.log('true');
        }
    }
    if (s.length % 2 !== 0) {
        return false;
    }
    let leng = s.length / 2;
    let ans = "";
    for (let i = 0; i < leng; i++) {
        let valIcon = s[i * 2] + s[i * 2 + 1];
        let valText = emojiUnicode(valIcon);
        let checker = false;
        for (let j = 0; j < iconKey.length; j++) {
            if (valText === iconKey[j]) {
                checker = true;
                break;
            }
        }
        if (checker === false) {
            return false;
        }
    }
    return true;
}

$("#btnConvertTextToIcon").click(function () {
    const strInput = String($('#input').val())
    // alert(strInput)
    const strOutput = convertTextToIcon(strInput);
    // alert(strOutput)
    $('#output').html(strOutput)
})


$("#btnConvertIconToText").click(function () {
    const strInput = String($('#inputIconToText').val())
    // alert(strInput)
    const strOutput = convertIconToText(strInput);
    // alert(strOutput)
    $('#output').html(strOutput)
})


$("#inputIconToText").change(function() {
    // alert('Textarea is changed');\
    if(!checkInputIcon(String($('#inputIconToText').val()))){
        alert('Your input is not valid')
    }
});


console.log(icon.length);
console.log(iconKey.length);
console.log(vni.length);