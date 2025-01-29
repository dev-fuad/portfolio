export const FLEX_REGEX = /^(flex|direction|wrap|shrink|grow|align|justify|overflow|aspect-ratio)-(.+)$/;

const Alignment = {
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
};

type AlignmentKey = keyof typeof Alignment;

export const getFlexStyles = (matchGroups: string[]) => {
  const [style, value] = matchGroups;

  if (style === 'flex') {
    return { flex: value === 'auto' ? 1 : parseInt(value) };
  }

  if (style === 'align') {
    return { alignItems: (Alignment[value as AlignmentKey] ?? value) as 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' };
  }

  if (style === 'justify') {
    return { justifyContent: (Alignment[value as AlignmentKey] ?? value) as 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' };
  }

  if (style === 'direction') {
    return { flexDirection: value as 'row' | 'row-reverse' | 'column' | 'column-reverse' };
  }

  if (style === 'wrap') {
    return { flexWrap: value as 'wrap' | 'nowrap' | 'wrap-reverse' };
  }

  if (style === 'shrink') {
    return { flexShrink: parseInt(value) };
  }

  if (style === 'grow') {
    return { flexGrow: parseInt(value) };
  }

  if (style === 'overflow') {
    return { overflow: value as 'visible' | 'hidden' | undefined };
  }

  if (style === 'aspect-ratio') {
    return { aspectRatio: parseFloat(value) ?? undefined };
  }

  return {};
};
