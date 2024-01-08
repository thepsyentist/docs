import { Attribute } from '@docs/ui/src/types/list.type';
import attributes from '../attributes';

const SVCLaundryCategory: Attribute[] = [
  { ...attributes.type, description: '"LAUNDRY_CATEGORY"로 고정 값 입니다.' },
  { ...attributes.subtype, description: 'subtype설명' },
  attributes.id,
  { name: 'title', required: false, type: 'string', description: '설명' },
  { name: 'code', required: false, type: 'string', description: '설명' },
  { name: 'content', required: false, type: 'string', description: '설명' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.children, type: 'SVCLaundrySubCategory', description: '해당 1차 카테고리의 2차 카테고리에 대한 정보입니다.' },
];

const SVCLaundrySubCategory: Attribute[] = [
  { ...attributes.type, description: '"LAUNDRY_SUB_CATEGORY"로 고정 값 입니다.' },
  { ...attributes.subtype, description: 'subtype설명' },
  attributes.id,
  { name: 'title', required: false, type: 'string', description: '설명' },
  { name: 'code', required: false, type: 'string', description: '설명' },
  { name: 'content', required: false, type: 'string', description: '설명' },
  attributes.deleted,
  attributes.published,
  attributes.updated,
  attributes.created,
  { ...attributes.userData, type: 'LaundrySubCategory', description: '2차 카테고리의 고유정보입니다.' },
];

const userData: Attribute[] = [
  { name: 'price', required: true, type: 'number', description: '설명' },
  { name: 'path', required: true, type: 'string[]', description: '설명' },
  { name: 'isShoes', required: false, type: 'boolean', description: '설명' },
];

export default {
  root: SVCLaundryCategory,
  subRoot: SVCLaundrySubCategory,
  userData: userData,
};
