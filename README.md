# nha-cho-thue-x1

Một dự án về quảng bá Nhà cho thuê tại Phú Giáo

## Firebase Analytics

- Khởi tạo: project đã có `app/plugins/firebaseConfig.ts` với `measurementId` mặc định.
- Gắn plugin client để khởi tạo Analytics và tự động gửi `page_view`: `app/plugins/firebaseAnalytics.client.ts`.
- Sử dụng composable `useAnalytics()` để gửi sự kiện tuỳ chỉnh:

```ts
// ví dụ
const { logEvent } = useAnalytics();
logEvent("select_content", { content_type: "property", item_id: "123" });
```

- Đặt biến môi trường để ghi đè `measurementId`: `NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID`.
