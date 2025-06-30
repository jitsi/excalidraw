import Footer from "./components/footer/FooterCenter";
import LiveCollaborationTrigger from "./components/live-collaboration/LiveCollaborationTrigger";
import MainMenu from "./components/main-menu/MainMenu";
import WelcomeScreen from "./components/welcome-screen/WelcomeScreen";

export {
  getSceneVersion,
  hashElementsVersion,
  hashString,
  getNonDeletedElements,
} from "@excalidraw/element";

export { getTextFromElements } from "@excalidraw/element";
export { isInvisiblySmallElement } from "@excalidraw/element";

export { defaultLang, useI18n, languages } from "./i18n";
export {
  restore,
  restoreAppState,
  restoreElements,
  restoreLibraryItems,
} from "./data/restore";

export { reconcileElements } from "./data/reconcile";

export {
  exportToCanvas,
  exportToBlob,
  exportToSvg,
  exportToClipboard,
} from "@excalidraw/utils/export";

export { serializeAsJSON, serializeLibraryAsJSON } from "./data/json";
export {
  loadFromBlob,
  loadSceneOrLibraryFromBlob,
  loadLibraryFromBlob,
} from "./data/blob";
export { getFreeDrawSvgPath } from "@excalidraw/element";
export { mergeLibraryItems, getLibraryItemsHash } from "./data/library";
export { isLinearElement } from "@excalidraw/element";

export {
  FONT_FAMILY,
  THEME,
  MIME_TYPES,
  ROUNDNESS,
  DEFAULT_LASER_COLOR,
  UserIdleState,
  normalizeLink,
} from "@excalidraw/common";

export {
  mutateElement,
  newElementWith,
  bumpVersion,
} from "@excalidraw/element";

export { CaptureUpdateAction } from "@excalidraw/element";

export { parseLibraryTokensFromUrl, useHandleLibrary } from "./data/library";

export {
  sceneCoordsToViewportCoords,
  viewportCoordsToSceneCoords,
} from "@excalidraw/common";

export { Sidebar } from "./components/Sidebar/Sidebar";
export { Button } from "./components/Button";
export { Footer };
export { MainMenu };
export { useDevice } from "./components/App";
export { WelcomeScreen };
export { LiveCollaborationTrigger };
export { Stats } from "./components/Stats";

export { DefaultSidebar } from "./components/DefaultSidebar";
export { TTDDialog } from "./components/TTDDialog/TTDDialog";
export { TTDDialogTrigger } from "./components/TTDDialog/TTDDialogTrigger";

export { zoomToFitBounds } from "./actions/actionCanvas";
export { convertToExcalidrawElements } from "./data/transform";
export { getCommonBounds, getVisibleSceneBounds } from "@excalidraw/element";

export {
  elementsOverlappingBBox,
  isElementInsideBBox,
  elementPartiallyOverlapsWithOrContainsBBox,
} from "@excalidraw/utils/withinBounds";

export { DiagramToCodePlugin } from "./components/DiagramToCodePlugin/DiagramToCodePlugin";
export { getDataURL } from "./data/blob";
export { isElementLink } from "@excalidraw/element";

export { setCustomTextMetricsProvider } from "@excalidraw/element";


export { Collab , Excalidraw , ExcalidrawApp } from "./collab/index";

export { generateCollaborationLinkData } from "../../excalidraw-app/data/index"