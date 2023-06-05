import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrderAttributes: Attribute[] = [
  { ...attributes.type, description: 'Doc의 Type입니다. "ORDER"로 고정 값 입니다.' },
  attributes.id,
  {...attributes.bucketId,description: '해당 주문이 발생한 함의 bucketId입니다.(단지)'},
  {...attributes.parentId,description: '해당 주문이 발생한 함의 docId입니다.(세탁함)'},
  { name: 'title', required: true, type: 'string', description: '고객 휴대폰 번호 \n ex) 01012345678' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  {...attributes.status, type:'"DEPOSIT" | "PICKEDUP" | "SHIPPING" | "SHIPPING_CANCEL" | "INSPECT" | "CLEANING" | "PREPARE" | "DELIVERING" | "WAITPAY" | "PAYCOMPLETED" | "COMPLETED"' ,description:'각 주문에 대한 상태 \n*아래 설명 참고' },
];

export default SVCOrderAttributes;
