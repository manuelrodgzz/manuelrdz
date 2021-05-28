import { NavItemMap, Translation, DemoCard, DemoCardMap } from '../interfaces/index';
export type RepoLanguages = {
    [key: string]: number
}

export type SiteContentMap = {
    nav: {
        [key: string]: NavItemMap
    }
    index: {
        aboutTitle: Translation,
        aboutContent: Translation,
        technologiesTitle: Translation,
        pinnedReposTitle: Translation,
        repoCardButtonText: Translation
    },
    projects: {
        demosTitle: Translation,
        demosContent: Translation,
        demos: DemoCardMap[]
    },
    resume: {
        title: Translation,
        downloadButton: Translation,
        resumeButton: Translation
    }
}

export type SiteContent = {
    nav: {
        [key: string]: {
            text: string,
            path: string
        }
    }
    index: {
        aboutTitle: string,
        aboutContent: string,
        technologiesTitle: string,
        pinnedReposTitle: string,
        repoCardButtonText: string
    },
    projects: {
        demosTitle: string,
        demosContent: string,
        demos: DemoCard[]
    },
    resume: {
        title: string,
        downloadButton: string,
        resumeButton: string
    }
}

export type AllRepoLanguages = {
    [key: string]: RepoLanguages
}
