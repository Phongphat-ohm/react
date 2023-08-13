// liff.js
import liff from '@line/liff';

window.onload = async function () {
    await liff.init({ liffId: '2000394175-m15NX6eP' }); // แทน YOUR_LIFF_ID ด้วย LIFF ID ของคุณ

    // เรียกใช้งาน LIFF API ที่คุณต้องการ
    const profile = await liff.getProfile();
    console.log(profile);
};
