const charMap = new Map([
  ['[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]', 'a'],
  ['[ÇĆĈČ]', 'c'],
  ['[ÐĎĐÞ]', 'd'],
  ['[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]', 'e'],
  ['[ĜĞĢǴ]', 'g'],
  ['[ĤḦ]', 'h'],
  ['[ÌÍÎÏĨĪĮİỈỊ]', 'i'],
  ['[Ĵ]', 'j'],
  ['[Ĳ]', 'ij'],
  ['[Ķ]', 'k'],
  ['[ĹĻĽŁ]', 'l'],
  ['[Ḿ]', 'm'],
  ['[ÑŃŅŇ]', 'n'],
  ['[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]', 'o'],
  ['[Œ]', 'oe'],
  ['[ṕ]', 'p'],
  ['[ŔŖŘ]', 'r'],
  ['[ßŚŜŞŠȘ]', 's'],
  ['[ŢŤ]', 't'],
  ['[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]', 'u'],
  ['[ẂŴẀẄ]', 'w'],
  ['[ẍ]', 'x'],
  ['[ÝŶŸỲỴỶỸ]', 'y'],
  ['[ŹŻŽ]', 'z'],
  ["[·/_,:;']", '-'],
]);

const regexPattern = new RegExp(Array.from(charMap.keys()).join('|'), 'gi');

export const slugify = (text: string): string => {
  const normalizedText = text.toLowerCase().trim();
  const replacedText = normalizedText.replace(regexPattern, match => charMap.get(match) || '');
  return replacedText.replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
};
