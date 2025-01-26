
import { pallete } from "./colors";
import { directions, spacing } from "./spacing";

/**
 * Border regex
 * @example
 * bt-1-black
 * br-5-primary
 * radl-10
 */

export const BORDER_REGEX = /^(b)(a|t|r|b|l|v|h)-([0-9]+)-(.+)$/;
export const BORDER_RADIUS_REGEX = /^(rad)-((?:a|t|r|b|l){2})-(.+)$/;

export const getBorder = (matchGroups: string[]) => {
  const [style, ...values] = matchGroups;

  if (style === 'b') {
    if (values.length === 3 && values[0] in directions) {
      return {
        [`border${directions[values[0]]}Width`]: parseInt(values[1]) ?? 1,
        [`border${directions[values[0]]}Color`]: pallete[values[2] as keyof typeof pallete] ?? pallete.black,
      };
    }
    return {};
  }

  if (style === 'rad') {
    if (values.length === 2 && values[0].length === 2 && values[0].split('').every((v) => v in directions)) {
      // borderTopLeftRadius -> d1 = Top, d2 = Left
      const direction1 = directions[values[0].at(0)!];
      const direction2 = directions[values[0].at(1)!];
      const value = spacing[values[1]] ?? parseInt(values[1]);
      
      if (value === null || value === undefined || (typeof value !== 'string' && isNaN(value))) {
        return {};
      }

      return {
        [`border${direction1}${direction2}Radius`]: value,
      };
    }
    return {};
  }

  return {};
};
