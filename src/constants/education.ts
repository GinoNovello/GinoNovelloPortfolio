interface EducationEntry {
    id: string;
    school: string;
    logoUrl: string;
    start: string;
    end: string | null;
  }
  
  export const EDUCATION_DATA: readonly EducationEntry[] = [
    {
      id: "ibr",
      school: "Instituto Bernardino Rivadavia",
      logoUrl: "/ibr.jpg",
      start: "2016",
      end: "2021"
    },
    {
      id: "unl",
      school: "Universidad Nacional del Litoral",
      logoUrl: "/unl.jfif",
      start: "2024",
      end: "Present"
    }
  ] as const;