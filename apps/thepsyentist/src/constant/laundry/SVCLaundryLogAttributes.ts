import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrder: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "LAUNDRYLOG"로 고정 값 입니다.' },
  attributes.id,
  { ...attributes.bucketId, description: '해당 세탁기록이 발생한 보관함의 bucketId입니다.' },
  { ...attributes.parentId, description: '해당 세탁기록이 발생한 주문의 docId입니다.' },
  { name: 'title', required: true, type: 'string', description: '고객 휴대폰 번호 입니다. \n ex) 01012345678' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  {
    ...attributes.status,
    type: 'OrderStatus',
    description: '각 세탁 기록에 대한 상태 \n*아래 설명 참고',
  },
  { ...attributes.userData, type: 'LaundryLog', description: '세탁기록의 고유정보를 나타냅니다.' },
];

const userData: Attribute[] = [
  { name: 'code', required: false, type: 'number', description: '보관함의 번호 입니다. \n일반적인 경우 1~17번 중에 하나로 사용됩니다.' },
  { name: 'lockername', required: false, type: 'string', description: '보관함의 이름입니다.' },
  { name: 'location', required: false, type: 'string', description: '보관함의 위치입니다.' },
  {
    name: 'parentDocInfo',
    required: false,
    type: 'Order',
    description: '해당 세탁기록이 발생한 주문의 doc 정보입니다. \nparentId의 대한 정보입니다.',
    link: '/laundry/domain/order',
  },
];

export default {
  root: SVCOrder,
  userData: userData,
};
