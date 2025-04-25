/**
 * Interface for Major Credits with a brand for unique identification
 */
interface MajorCredits {
    credits: number;
    readonly _majorBrand: unique symbol; // Brand property to uniquely identify MajorCredits
  }
  
  /**
   * Interface for Minor Credits with a brand for unique identification
   */
  interface MinorCredits {
    credits: number;
    readonly _minorBrand: unique symbol; // Brand property to uniquely identify MinorCredits
  }
  
  /**
   * Sum the credits of two major subjects
   * @param subject1 - First major subject
   * @param subject2 - Second major subject
   * @returns The sum of credits as MajorCredits
   */
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
    } as MajorCredits;
  }
  
  /**
   * Sum the credits of two minor subjects
   * @param subject1 - First minor subject
   * @param subject2 - Second minor subject
   * @returns The sum of credits as MinorCredits
   */
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
    } as MinorCredits;
  }