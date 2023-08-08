import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCComplexAttributes: Attribute[] = [
  { ...attributes.type, description: '버킷의 Type입니다. "COMPLEX"로 고정 값 입니다.' },
  attributes.id,
  { name: 'name', required: false, type: 'string', description: '단지의 이름입니다. \n ex) 롯데캐슬스카이' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  {
    name: 'userData.belong',
    required: false,
    type: '"seroi" | "citech" | "seroi2"',
    description: '함의 구분을 짓기 위해 사용합니다. \nseroi: 기본 새로이함 \ncitech: citech함 \nseroi2: 새로이 2분할 함(초창기 새로이함)',
  },
];

export default SVCComplexAttributes;
