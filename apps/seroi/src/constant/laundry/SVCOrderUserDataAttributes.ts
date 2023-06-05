import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCOrderUserDataAttributes: Attribute[] = [
 { name: 'code', required: false, type: 'number', description: '세탁함의 번호 입니다.(보통 1~17번 중에 하나)' },
  { name: 'dates', required: false, type: 'OrderDate', description: '맡기기/찾기/배송/완료 등의 시간 정보 \nunix time의 배열 형태' },
  { name: 'isAgreed', required: false, type: 'boolean', description: '고객정보 확인 동의 여부 -> 사용하지 않음(추후 사용 가능성O)' },
];

export default SVCOrderUserDataAttributes;
