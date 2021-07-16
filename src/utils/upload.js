export function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e) => {
      resolve(e.target.result);
    };
  });
}

// 字段对应表
export const keyObj = {
  supplier: {
    text: `供应商名称（全称）
Company Name (Full name)`,
  },
  city: {
    text: `城市
City`,
  },
  good_at: {
    text: `擅长类别
Business Type`,
  },
  contact_person: {
    text: `联系人
Contact person`,
  },
  position: {
    text: `职务
Contact's Title`,
  },
  phone: {
    text: `手机号码
Phone Number`,
  },
  QQ: {
    text: `QQ号码
QQ Number`,
  },
  WeChat: {
    text: `微信
Wechat ID`,
  },
  mailbox: {
    text: `邮箱（入库用，重要）
Email Address (IMPORTANT)`,
  },
  Inc_link: {
    text: `公司网址（个人主页）
Company Website (Personal Page)`,
  },
  recommended_by: {
    text: `推荐人（如有）
Recommender (If applicable)`,
  },
  address: {
    text: `收件地址
Mailing Address`,
  },
  register_address: {
    text: `注册地址及电话（企业填写）
Registration Address and Phone Number (Enterprise Only)`,
  },
  account_name: {
    text: `开户名
Account Name`,
  },
  bank: {
    text: `开户行
Bank Name and Branch Address`,
  },
  bank_account: {
    text: `银行账号
Bank Account`,
  },
  invoice: {
    text: `发票类型
Type of Invoice`,
  },
  nature: {
    text: `供应商类型（企业/个人）
Type of Supplier (Enterprise or Individual)`,
  },
};

