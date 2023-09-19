import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrder: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "ORDER"로 고정 값 입니다.' },
  attributes.id,
  { ...attributes.bucketId, description: '주문이 발생한 보관함의 bucketId입니다.(단지)' },
  { ...attributes.parentId, description: '주문이 발생한 보관함의 docId입니다.(세탁함)' },
  { name: 'title', required: true, type: 'string', description: '고객 휴대폰 번호 \n ex) 01012345678' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  {
    ...attributes.status,
    type: 'OrderStatus',
    description: '각 주문에 대한 상태 \n*아래 설명 참고',
  },
  { ...attributes.userData, type: 'LaundryOrder', description: '주문의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'code', required: false, type: 'number', description: '보관함의 번호 입니다. \n일반적인 경우 1~17번 중에 하나로 사용됩니다.' },
  { name: 'dates', required: true, type: 'Array<number(Unix Timestamp)>', description: '맡기기/찾기/배송/완료 등의 시간 정보 값 입니다.' },
  { name: 'isAgreed', required: false, type: 'boolean', description: '고객정보 확인 동의 여부 값 입니다. \n현재는 활용되지 않는 속성이며, 추가 기능구현에 반영 될 예정입니다.' },
  { name: 'userSVCId', required: true, type: 'string', description: '해당 주문의 유저의 SVCUser_로 시작하는 ID입니다.' },
  { name: 'userUniqueId', required: true, type: 'string', description: '해당 주문의 유저의 고유 ID입니다.(단지코드-핸드폰 번호 조합형태)' },
  { name: 'complexCode', required: false, type: 'string', description: '해당 함의 단지 코드' },
  { name: 'items', required: false, type: 'Array<SVCLaundryReceived>', description: '해당주문에서 생성된 세탁 아이템들의 대한 정보입니다.' },
  { name: 'originItems', required: false, type: 'Array<SVCLaundryReceived>', description: '해당주문에서 생성된 세탁 아이템들의 최초 접수되었을때에 대한 정보입니다.' },
  { name: 'originalOrderId', required: false, type: 'string', description: '세탁물 부분출고 진행 시 원래 주문의 ID를 기록하기 위한 필드입니다.' },
  { name: 'payment', required: false, type: 'Object(payment)', description: '주문의 결제관련 정보입니다.' },
];
const dates: Attribute[] = [
  {
    name: 'canceled',
    required: false,
    type: 'number(ms)[] | null',
    description: '취소 시간 값 입니다.',
  },
  { name: 'delivered', required: false, type: 'number(ms)[] | null', description: '배송완료 시간 값 입니다.' },
  { name: 'completed', required: false, type: 'number(ms)[] | null', description: '완료 시간 값 입니다.' },
  { name: 'inspected', required: false, type: 'number(ms)[] | null', description: '수거 시간 값 입니다.' },
  { name: 'payed', required: false, type: 'number(ms)[] | null', description: '결제완료 시간 값 입니다.' },
  { name: 'pickedup', required: false, type: 'number(ms)[] | null', description: '맡기기 시간 값 입니다.' },
  { name: 'cleanCompleted', required: false, type: 'number(ms)[] | null', description: '세탁완료 시간 값 입니다.' },
  { name: 'shipout', required: false, type: 'number(ms)[] | null', description: '세탁물 출고 시간 값 입니다.' },
  { name: 'return', required: false, type: 'number(ms)[] | null', description: '세탁물 반송 시간 값 입니다.' },
];

const payment: Attribute[] = [
  { name: 'discountAmount', required: false, type: 'number', description: '주문에서 할인 된 금액 값 입니다.' },
  { name: 'totalAmount', required: false, type: 'number', description: '주문에서 총 결제 될 금액 값 입니다.' },
  { name: 'kioskAmount', required: false, type: 'number', description: '주문에서 키오스크에서 결제해야할 금액 값 입니다.' },
];

export default {
  root: SVCOrder,
  userData: userData,
  dates: dates,
  payment: payment,
};
