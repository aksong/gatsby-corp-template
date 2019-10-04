import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import PartnersPreview from "./preview-templates/PartnersPagePreview";
import ProductsPreview from "./preview-templates/ProductsPreview";
import SolutionsPreview from "./preview-templates/SolutionsPagePreview";
import JobPagePreview from "./preview-templates/JobPagePreview";
import PressPreview from "./preview-templates/PressPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("job", JobPagePreview);
CMS.registerPreviewTemplate("partners", PartnersPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("solutions", SolutionsPreview);
CMS.registerPreviewTemplate("press", PressPreview);
