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
  { name: 'dates', required: false, type: 'Array<number(Unix Timestamp)>', description: '맡기기/찾기/배송/완료 등의 시간 정보 값 입니다.' },
  { name: 'isAgreed', required: false, type: 'boolean', description: '고객정보 확인 동의 여부 값 입니다. \n현재는 활용되지 않는 속성이며, 추가 기능구현에 반영 될 예정입니다.' },
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
];

export default {
  root: SVCOrder,
  userData: userData,
  dates: dates,
};
