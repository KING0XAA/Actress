const location = {
    //original
    512154520: {
        0: [12, 32, 48, 10, 0]
    },
    1495703880: {
        0: [14, 32, 48, 10, -12]
    },
    1682344184: {
        0: [3, 31, 48, 10, 13]
    },
    3597030632: {
        0: [17, 31, 48, 10, -10]
    },
    3943071064: {
        0: [5, 32, 48, 10, 12]
    },
    2896562056: {
        0: [3, 33, 48, 11, -27]
    },
    2445684280: {
        0: [11, 30, 48, 10, -11]
    },
    328645097: {
        0: [19, 35, 48, 10, 10]
    },
    787910745: {
        0: [12, 35, 48, 10, -5]
    },
    3904512397: {
        0: [9, 36, 48, 10, 0]
    },
    3587835965: {
        0: [5, 29, 48, 10, 23]
    },
    2457498349: {
        0: [9, 30, 48, 10, 0]
    },
    2937740125: {
        0: [10, 30, 48, 10, -4]
    },
    490374989: {
        0: [3, 30, 48, 10, -21]
    },
    542813949: {
        0: [11, 33, 48, 10, -10]
    },
    1744491565: {
        0: [12, 31, 48, 10, 0]
    },
    1520106909: {
        0: [5, 32, 48, 12, 6]
    },
    //018
    3853140988: {
        0: [3, 30, 48, 10, -29]
    },
    1848529699: {
        0: [9, 33, 48, 10, -8]
    },
    1397652115: {
        0: [7, 30, 48, 10, 3]
    },
    351141955: {
        0: [18, 35, 48, 10, 7]
    },
    697182707: {
        0: [14, 29, 48, 10, 5]
    },
    2611934691: {
        0: [3, 29, 48, 10, -5]
    },
    2798574675: {
        0: [16, 31, 48, 10, -17]
    },
    3782125187: {
        0: [12, 30, 48, 10, -8]
    },
    3691941683: {
        0: [3, 28, 48, 10, -29]
    },
    1583225058: {
        0: [20, 32, 48, 10, -15]
    },
    1665020242: {
        0: [8, 31, 48, 10, -16]
    },
    2775744646: {
        0: [20, 31, 48, 10, -11]
    },
    2551359798: {
        0: [4, 30, 48, 10, -18]
    },
    3753038822: {
        0: [7, 34, 48, 10, 5]
    },
    3805477462: {
        0: [6, 32, 48, 10, 30]
    },
    1358046790: {
        0: [18, 32, 48, 10, -30]
    },
    //035    
    707949862: {
        0: [16, 32, 48, 10, -23]
    },
    //037
    2499988295: {
        0: [5, 32, 48, 10, -16]
    },
    2825052919: {
        0: [7, 32, 48, 10, -10]
    },
    3094851646: {
        0: [18, 36, 48, 10, 5]
    },
    //041~043
    1308038910: {
        0: [9, 31, 48, 10, 15]
    },
    1888960334: {
        0: [16, 36, 48, 10, 20]
    },
    926369182: {
        0: [22, 29, 48, 10, 16]
    },
    173501486: {
        0: [6, 32, 48, 10, -20]
    },
    2282224639: {
        0: [10, 32, 48, 10, -15]
    },
    3043480143: {
        0: [6, 26, 48, 10, 25]
    },
    1932223387: {
        0: [4, 28, 48, 10, -34]
    },
    //051
    166408443: {
        0: [15, 31, 48, 10, 11]
    },
    881531211: {
        0: [17, 30, 48, 10, 17]
    },
    2259404123: {
        0: [17, 31, 48, 10, -14]
    },
    //collabo
    2102849186: {
        0: [6, 35, 48, 10, 11]
    },
    989238386: {
        0: [9, 33, 48, 10, -5]
    },
    127319490: {
        0: [17, 31, 48, 10, 20]
    },
    2338985143: {
        0: [10, 33, 48, 10, -12]
    },
    2295744610: {
        0: [11, 33, 48, 10, 0]
    },
    3480629938: {
        0: [12, 32, 48, 10, 0]
    },
    4061534978: {
        0: [14, 32, 48, 10, -10]
    },
    1883671763: {
        0: [5, 30, 48, 10, -12]
    },
    1294378339: {
        0: [16, 33, 48, 11, -14]
    },
    3054124295: {
        0: [12, 32, 48, 10, -10]
    },
    4054468567: {
        0: [11, 30, 48, 10, -10]
    },
    3435818599: {
        0: [17, 35, 48, 10, 0]
    },
    2129310327: {
        0: [7, 35, 48, 10, 16]
    },
    961202343: {
        0: [16, 31, 48, 10, 14]
    },
    2688784669: {
        0: [16, 31, 48, 10, 14]
    },
    3139067766: {
        0: [7, 33, 48, 10, -13]
    },
    2256172742: {
        0: [13, 36, 48, 10, 15]
    },
    //default
    0: {
        0: [12, 32, 48, 10, 0]
    },
};

var getCardStyle = function (actressId) {
    if (!location[actressId] || !location[actressId][0]) {
        actressId = 0;
    }
    var base = location[actressId][0];
    return {
        left: base[0] + 'px',
        top: base[1] + 'px',
        width: base[2] + 'px',
        height: base[3] + 'px',
        transform: 'rotate(' + base[4] + 'deg)'
    };
};

const Easter = {
    getCardStyle,
};

export { Easter };
export default Easter;