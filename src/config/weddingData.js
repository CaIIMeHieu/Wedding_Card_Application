/**
 * ✨ WEDDING DATA CONFIG
 * Chỉ cần sửa file này để thay đổi toàn bộ thông tin trên thiệp cưới.
 *
 * RSVP Google Sheets Setup:
 * 1. Tạo Google Sheet mới
 * 2. Extensions > Apps Script > paste code bên dưới > Deploy as Web App
 * 3. Copy URL paste vào rsvp.googleScriptUrl
 *
 * Apps Script code:
 * function doPost(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([new Date(), data.name, data.message, data.attending, data.guests, data.side]);
 *   return ContentService.createTextOutput(JSON.stringify({result:'success'}))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 */

export const weddingData = {
  groom: {
    firstName: 'Tuấn Dương',
    fullName: 'Lê Tuấn Dương',
    fatherName: 'Lê Thanh Hải',
    motherName: 'Lê Thị Sản',
  },
  bride: {
    firstName: 'Tuyết Nhung',
    fullName: 'Dương Tuyết Nhung',
    fatherName: 'Dương Xuân Lợi',
    motherName: 'Nguyễn Thị Vân',
  },

  weddingDate: '2026-03-12T11:30:00+07:00',
  weddingDateDisplay: '12.03.2026',
  weddingMonth: 3,
  weddingYear: 2026,
  weddingDay: 12,

  events: [
    {
      title: 'TIỆC THÂN MẬT',
      time: '15:00',
      dayOfWeek: 'THỨ TƯ',
      date: '11',
      lunarDate: 'Tức ngày 23 tháng 01 năm Bính Ngọ',
      venue: 'NHÀ VĂN HÓA THÔN PHÚ HẠNH',
      address: 'Thôn Phú Hạnh, Xã Thổ Tang, Tỉnh Phú Thọ',
      mapUrl: 'https://maps.google.com/?q=Thôn+Phú+Hạnh,+Xã+Thổ+Tang,+Tỉnh+Phú+Thọ',
    },
    {
      title: 'LỄ THÀNH HÔN',
      time: '11:30',
      dayOfWeek: 'THỨ NĂM',
      date: '12',
      lunarDate: 'Tức ngày 24 tháng 01 năm Bính Ngọ',
      venue: 'NHÀ VĂN HÓA THÔN PHÚ HẠNH',
      address: 'Thôn Phú Hạnh, Xã Thổ Tang, Tỉnh Phú Thọ',
      mapUrl: 'https://maps.google.com/?q=Thôn+Phú+Hạnh,+Xã+Thổ+Tang,+Tỉnh+Phú+Thọ',
    },
  ],

  timeline: [
    { time: '09:00', label: 'ĐÓN KHÁCH', icon: 'champagne' },
    { time: '11:30', label: 'LỄ THÀNH HÔN', icon: 'bouquet' },
  ],

  content: {
    invitation: 'KÍNH MỜI THAM DỰ TIỆC CHUNG VUI CỦA GIA ĐÌNH CHÚNG TÔI',
    loveQuote: 'All of me loves all of you',
    sideQuote: 'Every moment with you feels painted in gentle light.',
    ourStory:
      'Tình yêu của anh và em là một hành trình kỳ diệu, vượt qua bao thử thách để cùng nhau bước đến ngày trọng đại – đám cưới của chúng mình.\n\nĐám cưới này là lời cam kết chân thành, là sự bắt đầu của một chương mới – nơi chúng ta cùng vun đắp tổ ấm, cùng sẻ chia mọi vui buồn và cùng nắm tay nhau đi đến cuối con đường mang tên hạnh phúc.',
    rsvpMessage:
      'Hãy xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất.\nTrân trọng!',
  },

  banking: {
    groom: {
      bankName: 'Techcombank',
      accountNumber: '19033950499016',
      accountHolder: 'LÊ TUẤN DƯƠNG',
    },
    bride: {
      bankName: 'Techcombank',
      accountNumber: '1234567890',
      accountHolder: 'DƯƠNG TUYẾT NHUNG',
    },
  },

  images: {
    hero: 'https://w.ladicdn.com/s750x1500/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0033_1-20251010160355-v6bgi.png',
    polaroid1: 'https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097833-20260226092426-obwur.png',
    polaroid2: 'https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097848-20260226092426-muwmv.png',
    groomPortrait: 'https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097833-20260226092426-obwur.png',
    bridePortrait: 'https://w.ladicdn.com/s500x500/6322a62f2dad980013bb5005/screenshot_1772097848-20260226092426-muwmv.png',
    loveQuoteBg: 'https://w.ladicdn.com/s750x1500/6322a62f2dad980013bb5005/thiep-thanh-dat-element_0033_1-20251010160355-v6bgi.png',
    gallery: [
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772105500-20260226113156-gf-fk.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098340-20260226113156-9mcm_.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098299-20260226113155-pjmyk.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098309-20260226113155-lturc.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098265-20260226113155-j_2jq.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098258-20260226113155-uegw8.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098273-20260226113155-c9-qi.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098329-20260226113156-mzcsb.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098323-20260226113156-lnp02.png',
      'https://w.ladicdn.com/s750x1050/6322a62f2dad980013bb5005/screenshot_1772098316-20260226113155-bqsr5.png'
    ],
  },

  rsvp: {
    googleScriptUrl: '', // Paste Google Apps Script Web App URL here
    attendOptions: ['Sẽ đến', 'Không đến'],
    sideOptions: ['Nhà trai', 'Nhà gái'],
  },
};
