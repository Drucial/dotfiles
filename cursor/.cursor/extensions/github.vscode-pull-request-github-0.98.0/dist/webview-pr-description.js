var ic=Object.defineProperty;var l=(sl,Oo)=>ic(sl,"name",{value:Oo,configurable:!0});(()=>{var sl={9149:(D,S,Y)=>{"use strict";Y.d(S,{Z:()=>y});var J=Y(3645),ee=Y.n(J),I=ee()(function(h){return h[1]});I.push([D.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

body a {
	text-decoration: var(--text-link-decoration);
}

h3 {
	display: unset;
	font-size: unset;
	margin-block-start: unset;
	margin-block-end: unset;
	margin-inline-start: unset;
	margin-inline-end: unset;
	font-weight: unset;
}

body a:hover {
	text-decoration: underline;
}

button,
input[type='submit'] {
	color: var(--vscode-button-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
	border: 1px solid transparent;
	padding: 4px 12px;
	font-size: 13px;
	line-height: 18px;
	white-space: nowrap;
	user-select: none;
}

button:not(.icon-button),
input[type='submit'] {
	background-color: var(--vscode-button-background);
}

input.select-left {
	border-radius: 2px 0 0 2px;
}

button.select-right {
	border-radius: 0 2px 2px 0;
}

button:focus,
input[type='submit']:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: 2px;
}

button:focus-within,
input[type='submit']:focus-within {
	border: 1px solid transparent;
	outline: 1px solid transparent;
}

button:hover:enabled,
button:focus:enabled,
input[type='submit']:focus:enabled,
input[type='submit']:hover:enabled {
	background-color: var(--vscode-button-hoverBackground);
	cursor: pointer;
}

button.secondary {
	background-color: var(--vscode-button-secondaryBackground);
	color: var(--vscode-button-secondaryForeground);
}

button.secondary:hover:enabled,
button.secondary:focus:enabled,
input[type='submit'].secondary:focus:enabled,
input[type='submit'].secondary:hover:enabled {
	background-color: var(--vscode-button-secondaryHoverBackground);
}

textarea,
input[type='text'] {
	display: block;
	box-sizing: border-box;
	padding: 8px;
	width: 100%;
	resize: vertical;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-input-background);
	color: var(--vscode-input-foreground);
	font-family: var(--vscode-font-family);
	border-radius: 2px;
}

textarea::placeholder,
input[type='text']::placeholder {
	color: var(--vscode-input-placeholderForeground);
}

select {
	display: block;
	box-sizing: border-box;
	padding: 4px 8px;
	border-radius: 2px;
	font-size: 13px;
	border: 1px solid var(--vscode-dropdown-border);
	background-color: var(--vscode-dropdown-background);
	color: var(--vscode-dropdown-foreground);
}

textarea:focus,
input[type='text']:focus,
input[type='checkbox']:focus,
select:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

input[type='checkbox'] {
	outline-offset: 1px;
}

.vscode-high-contrast input[type='checkbox'] {
	outline: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast input[type='checkbox']:focus {
	outline: 1px solid var(--vscode-contrastActiveBorder);
}

svg path {
	fill: var(--vscode-foreground);
}

body button:disabled,
input[type='submit']:disabled {
	opacity: 0.4;
}

body .hidden {
	display: none !important;
}

body img.avatar,
body span.avatar-icon svg {
	width: 20px;
	height: 20px;
	border-radius: 50%;
}

body img.avatar {
	vertical-align: middle;
}

.avatar-link {
	flex-shrink: 0;
}

.icon-button {
	display: flex;
	padding: 2px;
	background: transparent;
	border-radius: 4px;
	line-height: 0;
}

.icon-button:hover,
.section .icon-button:hover,
.section .icon-button:focus {
	background-color: var(--vscode-toolbar-hoverBackground);
}

.icon-button:focus,
.section .icon-button:focus {
	outline: 1px solid var(--vscode-focusBorder);
	outline-offset: unset;
}

.label .icon-button:hover,
.label .icon-button:focus {
	background-color: transparent;
}

.section-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-item .avatar-link {
	margin-right: 8px;
}

.section-item .avatar-container {
	flex-shrink: 0;
}

.section-item .login {
	width: 129px;
	flex-shrink: 0;
}

.section-item img.avatar {
	width: 20px;
	height: 20px;
}

.section-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3px;
}

.section-icon.changes svg path {
	fill: var(--vscode-list-errorForeground);
}

.section-icon.commented svg path,
.section-icon.requested svg path {
	fill: var(--vscode-list-warningForeground);
}

.section-icon.approved svg path {
	fill: var(--vscode-issues-open);
}

.reviewer-icons {
	display: flex;
	gap: 4px;
}

.push-right {
	margin-left: auto;
}

.avatar-with-author {
	display: flex;
	align-items: center;
}

.author-link {
	font-weight: 600;
	color: var(--vscode-editor-foreground);
}

.status-item button {
	margin-left: auto;
	margin-right: 0;
}

.automerge-section {
	display: flex;
}

#status-checks .automerge-section {
	align-items: center;
	padding: 16px;
	background: var(--vscode-editorHoverWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.automerge-section .merge-select-container {
	margin-left: 8px;
}

.automerge-checkbox-wrapper,
.automerge-checkbox-label {
	display: flex;
	align-items: center;
	margin-right: 4px;
}

.automerge-checkbox-label {
	min-width: 80px;
}

.merge-queue-title .merge-queue-pending {
	color: var(--vscode-list-warningForeground);
}

.merge-queue-title .merge-queue-blocked {
	color: var(--vscode-list-errorForeground);
}

.merge-queue-title {
	font-weight: bold;
	font-size: larger;
}

/** Theming */

.vscode-high-contrast button:not(.secondary):not(.icon-button) {
	background: var(--vscode-button-background);
}


.vscode-high-contrast input {
	outline: none;
	background: var(--vscode-input-background);
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast button:focus {
	border: 1px solid var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast button:hover {
	border: 1px dotted var(--vscode-contrastActiveBorder);
}

::-webkit-scrollbar-corner {
	display: none;
}

.labels-list {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.label {
	display: flex;
	justify-content: normal;
	padding: 0 8px;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	line-height: 18px;
	font-weight: 600;
}

/* split button */

.primary-split-button {
	display: flex;
	flex-grow: 1;
	min-width: 0;
	max-width: 260px;
}

button.split-left {
	border-radius: 2px 0 0 2px;
	flex-grow: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.split {
	width: 1px;
	height: 100%;
	background-color: var(--vscode-button-background);
	opacity: 0.5;
}

button.split-right {
	border-radius: 0 2px 2px 0;
	cursor: pointer;
	width: 24px;
	height: 28px;
	position: relative;
}

button.split-right:disabled {
	cursor: default;
}

button.split-right .icon {
	pointer-events: none;
	position: absolute;
	top: 6px;
	right: 4px;
}

button.split-right .icon svg path {
	fill: unset;
}
button.input-box {
	display: block;
	height: 24px;
	margin-top: -4px;
	padding-top: 2px;
	padding-left: 8px;
	text-align: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: var(--vscode-input-foreground) !important;
	background-color: var(--vscode-input-background) !important;
}

button.input-box:active,
button.input-box:focus {
	color: var(--vscode-inputOption-activeForeground) !important;
	background-color: var(--vscode-inputOption-activeBackground) !important;
}

button.input-box:hover:not(:disabled) {
	background-color: var(--vscode-inputOption-hoverBackground) !important;
}

button.input-box:focus {
	border-color: var(--vscode-focusBorder) !important;
}

.dropdown-container {
	display: flex;
	flex-grow: 1;
	min-width: 0;
	margin: 0;
	width: 100%;
}

button.inlined-dropdown {
	width: 100%;
	max-width: 150px;
	margin-right: 5px;
	display: inline-block;
	text-align: center;
}`,""]);const y=I},7238:(D,S,Y)=>{"use strict";Y.d(S,{Z:()=>y});var J=Y(3645),ee=Y.n(J),I=ee()(function(h){return h[1]});I.push([D.id,`/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#app {
	display: grid;
	grid-template-columns: 1fr minmax(200px, 300px);
	column-gap: 32px;
}

#title {
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row: 1;
}

#main {
	grid-column: 1;
	grid-row: 2;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

#sidebar {
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-column: 2;
	grid-row: 2;
}

#project a {
	cursor: pointer;
}

a:focus,
input:focus,
select:focus,
textarea:focus,
.title-text:focus {
	outline: 1px solid var(--vscode-focusBorder);
}

.title-text {
	margin-right: 5px;
}

.title {
	display: flex;
	align-items: flex-start;
	margin: 20px 0;
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-list-inactiveSelectionBackground);
}

.title .pr-number {
	margin-left: 5px;
}

.loading-indicator {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.comment-body li div {
	display: inline;
}

.comment-body li div.Box,
.comment-body li div.Box div {
	display: block;
}

.comment-body code,
.comment-body a,
span.lineContent {
	overflow-wrap: anywhere;
}

#title:empty {
	border: none;
}

h2 {
	margin: 0;
}

body hr {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid #555;
	margin: 0 !important;
	padding: 0;
}

body .comment-container .avatar-container {
	margin-right: 12px;
}

body .comment-container .avatar-container a {
	display: flex;
}

body .comment-container .avatar-container img.avatar,
body .comment-container .avatar-container .avatar-icon svg {
	margin-right: 0;
}

.vscode-light .avatar-icon {
	filter: invert(100%);
}

body a.avatar-link:focus {
	outline-offset: 2px;
}

body .comment-container.comment,
body .comment-container.review {
	background-color: var(--vscode-editor-background);
}

.review-comment-container {
	width: 100%;
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	position: relative;
}

body #main>.comment-container>.review-comment-container>.review-comment-header:not(:nth-last-child(2)) {
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

body .comment-container .review-comment-header {
	position: relative;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px;
	color: var(--vscode-foreground);
	align-items: center;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.description-header {
	float: right;
	height: 32px;
}

.review-comment-header .comment-actions {
	margin-left: auto;
}

.review-comment-header .pending {
	color: inherit;
	font-style: italic;
}

.comment-actions button {
	background-color: transparent;
	padding: 0;
	line-height: normal;
	font-size: 11px;
}

.comment-actions button svg {
	margin-right: 0;
	height: 14px;
}

.status-scroll {
	max-height: 220px;
	overflow-y: auto;
}

.status-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-check-details {
	display: flex;
	align-items: center;
	gap: 8px;
}

#merge-on-github {
	margin-top: 10px;
}

.status-item {
	padding: 12px 16px;
	border-bottom: 1px solid var(--vscode-editorHoverWidget-border);
}

.status-item:first-of-type {
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.status-item,
.form-actions,
.ready-for-review-text-wrapper {
	display: flex;
	gap: 8px;
	align-items: center;
}

.status-item .button-container {
	margin-left: auto;
	margin-right: 0;
}

.commit-association {
	display: flex;
	font-style: italic;
	flex-direction: row-reverse;
	padding-top: 7px;
}

.commit-association span {
	flex-direction: row;
}

.email {
	font-weight: bold;
}

button.input-box {
	float: right;
}

.status-item-detail-text {
	display: flex;
	gap: 8px;
}

.status-check-detail-text {
	margin-right: 8px;
}

.status-section p {
	margin: 0;
}

.status-section .check svg path {
	fill: var(--vscode-issues-open);
}

.status-section .close svg path {
	fill: var(--vscode-errorForeground);
}

.status-section .pending svg path,
.status-section .skip svg path {
	fill: var(--vscode-list-warningForeground);
}

.merge-queue-container,
.ready-for-review-container {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.ready-for-review-icon {
	width: 16px;
	height: 16px;
}

.ready-for-review-heading {
	font-weight: 600;
}

.ready-for-review-meta {
	font-size: 0.9;
}

#status-checks {
	border: 1px solid var(--vscode-editorHoverWidget-border);
	border-radius: 4px;
}

#status-checks .label {
	display: inline-flex;
	margin-right: 16px;
}

#status-checks a {
	cursor: pointer;
}

#status-checks summary {
	display: flex;
	align-items: center;
}

#status-checks-display-button {
	margin-left: auto;
}

#status-checks .avatar-link svg {
	width: 24px;
	margin-right: 0px;
	vertical-align: middle;
}

.status-check .avatar-link .avatar-icon {
	margin-right: 0px;
}

#status-checks .merge-select-container {
	display: flex;
	align-items: center;
	background-color: var(--vscode-editorWidget-background);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

#status-checks .merge-select-container>* {
	margin-right: 5px;
}

#status-checks .merge-select-container>select {
	margin-left: 5px;
}

#status-checks .branch-status-container {
	display: inline-block;
}

#status-checks .branch-status-message {
	display: inline-block;
	line-height: 100%;
	padding: 16px;
}

body .comment-container .review-comment-header>span,
body .comment-container .review-comment-header>a,
body .commit .commit-message>a,
body .merged .merged-message>a {
	margin-right: 6px;
}

body .comment-container .review-comment-container .pending-label,
body .resolved-container .outdatedLabel {
	background: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
	font-size: 11px;
	font-weight: 600;
	border-radius: 20px;
	padding: 4px 8px;
	margin-left: 6px;
}

body .resolved-container .unresolvedLabel {
	font-style: italic;
	margin-left: 5px;
}

body .diff .diffPath {
	margin-right: 4px;
}

.comment-container form,
#merge-comment-form {
	padding: 16px;
	background-color: var(--vscode-editorWidget-background);
}

body .comment-container .comment-body,
.review-body {
	padding: 16px;
	border-top: none;
}

body .comment-container .review-comment-container .review-comment-body {
	display: flex;
	flex-direction: column;
	gap: 16px;
	border: none;
}

body .comment-container .comment-body>p,
body .comment-container .comment-body>div>p,
.comment-container .review-body>p {
	margin-top: 0;
	line-height: 1.5em;
}

body .comment-container .comment-body>p:last-child,
body .comment-container .comment-body>div>p:last-child,
.comment-container .review-body>p:last-child {
	margin-bottom: 0;
}

body {
	margin: auto;
	width: 100%;
	max-width: 1280px;
	padding: 0 32px;
	box-sizing: border-box;
}

body .hidden-focusable {
	height: 0 !important;
	overflow: hidden;
}

.comment-actions button:hover:enabled,
.comment-actions button:focus:enabled {
	background-color: transparent;
}

body button.checkedOut {
	color: var(--vscode-foreground);
	opacity: 1 !important;
	background-color: transparent;
}

body button .icon {
	width: 16px;
	height: 16px;
}

.prIcon {
	display: flex;
	border-radius: 10px;
	margin-right: 5px;
	margin-top: 18px;
}

.overview-title h2 {
	font-size: 32px;
}

.overview-title textarea {
	min-height: 50px;
}

.title-container {
	width: 100%;
}

.subtitle {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 12px;
}

.subtitle .avatar,
.subtitle .avatar-icon svg {
	margin-right: 6px;
}

.subtitle .author {
	display: flex;
	align-items: center;
}

.merge-branches {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	flex-wrap: wrap;
}

.branch-tag {
	padding: 2px 4px;
	background: var(--vscode-editorInlayHint-background);
	color: var(--vscode-editorInlayHint-foreground);
	border-radius: 4px;
}

.subtitle .created-at {
	margin-left: auto;
	white-space: nowrap;
}

.button-group {
	display: flex;
	gap: 8px;
}

.small-button {
	display: flex;
	font-size: 11px;
	padding: 0 5px;
}

:not(.status-item)>.small-button {
	font-weight: 600;
}

#status {
	box-sizing: border-box;
	line-height: 18px;
	color: var(--vscode-button-foreground);
	border-radius: 18px;
	padding: 4px 12px;
	margin-right: 10px;
	font-weight: 600;
	display: flex;
	gap: 4px;
}

#status svg path {
	fill: var(--vscode-button-foreground);
}

.vscode-high-contrast #status {
	border: 1px solid var(--vscode-contrastBorder);
	background-color: var(--vscode-badge-background);
	color: var(--vscode-badge-foreground);
}

.vscode-high-contrast #status svg path {
	fill: var(--vscode-badge-foreground);
}

.status-badge-merged {
	background-color: var(--vscode-pullRequests-merged);
}

.status-badge-open {
	background-color: var(--vscode-pullRequests-open);
}

.status-badge-closed {
	background-color: var(--vscode-pullRequests-closed);
}

.status-badge-draft {
	background-color: var(--vscode-pullRequests-draft);
}

.section {
	padding-bottom: 24px;
	border-bottom: 1px solid var(--vscode-editorWidget-border);
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.section:last-of-type {
	padding-bottom: 0px;
	border-bottom: none;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
}

.section-header .section-title {
	font-weight: 600;
}

.section-placeholder {
	color: var(--vscode-descriptionForeground);
}

.assign-yourself:hover {
	cursor: pointer;
}

.section svg {
	width: 16px;
	height: 16px;
	display: block;
	margin-right: 0;
}

.commit svg {
	width: 16px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.comment-container.commit {
	border: none;
	padding: 4px 16px;
}

.comment-container.commit,
.comment-container.merged {
	box-sizing: border-box;
}

.commit,
.review,
.merged {
	display: flex;
	width: 100%;
	border: none;
	color: var(--vscode-foreground);
}

.review {
	margin: 0px 8px;
	padding: 4px 0;
}

.commit .commit-message,
.merged .merged-message {
	display: flex;
	align-items: center;
	overflow: hidden;
	flex-grow: 1;
}

.commit .commit-message .avatar-container,
.merged .merged-message .avatar-container {
	margin-right: 4px;
	flex-shrink: 0;
}

.commit .avatar-container .avatar,
.commit .avatar-container .avatar-icon,
.commit .avatar-container .avatar-icon svg,
.merged .avatar-container .avatar,
.merged .avatar-container .avatar-icon,
.merged .avatar-container .avatar-icon svg {
	width: 18px;
	height: 18px;
}

.message-container {
	display: inline-grid;
}

.commit .commit-message .message,
.merged .merged-message .message {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.timeline-detail {
	display: flex;
	align-items: center;
	gap: 8px;
}

.commit .sha {
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	margin-bottom: -2px;
}

.merged .merged-message .message,
.merged .inline-sha {
	margin: 0 4px 0 0;
}

.merged svg {
	width: 14px;
	height: auto;
	margin-right: 8px;
	flex-shrink: 0;
}

.details {
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;
}

#description .comment-container {
	padding-top: 0px;
}

.comment-container {
	position: relative;
	width: 100%;
	display: flex;
	margin: 0;
	align-items: center;
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.comment-container[data-type='commit'] {
	padding: 8px 0;
	border: none;
}

.comment-container[data-type='commit']+.comment-container[data-type='commit'] {
	border-top: none;
}

.comment-body .review-comment {
	box-sizing: border-box;
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
}

.resolve-comment-row {
	display: flex;
	align-items: center;
	padding: 16px;
	background-color: var(--vscode-editorHoverWidget-background);
	border-top: 1px solid var(--vscode-editorHoverWidget-border);
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
}

.review-comment-container .review-comment .review-comment-header {
	padding: 16px 16px 8px 16px;
	border: none;
	background: none;
}

.review-comment-container .review-comment .comment-body {
	border: none;
	padding: 0px 16px 8px 16px;
}

.review-comment-container .review-comment .comment-body:last-of-type {
	padding: 0px 16px 16px 16px;
}

.comment-body .line {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
}

body .comment-form {
	padding: 20px 0 10px;
}

.review-comment-container .comment-form {
	margin: 0 0 0 36px;
	padding: 10px 0;
}

.task-list-item {
	list-style-type: none;
}

#status-checks textarea {
	margin-top: 10px;
}

textarea {
	min-height: 100px;
	max-height: 500px;
}

.editing-form {
	padding: 5px 0;
	display: flex;
	flex-direction: column;
	min-width: 300px;
}

.editing-form .form-actions {
	display: flex;
	gap: 8px;
	justify-content: flex-end;
}

.comment-form .form-actions>button,
.comment-form .form-actions>input[type='submit'] {
	margin-right: 0;
	margin-left: 0;
}

.primary-split-button {
	flex-grow: unset;
}

.dropdown-container {
	justify-content: right;
}

.form-actions {
	display: flex;
	justify-content: flex-end;
	padding-top: 10px;
}

#rebase-actions {
	flex-direction: row-reverse;
}

.main-comment-form>.form-actions {
	margin-bottom: 10px;
}

.details .comment-body {
	padding: 19px 0;
}

blockquote {
	display: block;
	flex-direction: column;
	margin: 8px 0;
	padding: 8px 12px;
	border-left-width: 5px;
	border-left-style: solid;
}

blockquote p {
	margin: 8px 0;
}

blockquote p:first-child {
	margin-top: 0;
}

blockquote p:last-child {
	margin-bottom: 0;
}

.comment-body a:focus,
.comment-body input:focus,
.comment-body select:focus,
.comment-body textarea:focus {
	outline-offset: -1px;
}

.comment-body hr {
	border: 0;
	height: 2px;
	border-bottom: 2px solid;
}

.comment-body h1 {
	padding-bottom: 0.3em;
	line-height: 1.2;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.comment-body h1,
h2,
h3 {
	font-weight: normal;
}

.comment-body h1 code,
.comment-body h2 code,
.comment-body h3 code,
.comment-body h4 code,
.comment-body h5 code,
.comment-body h6 code {
	font-size: inherit;
	line-height: auto;
}

.comment-body table {
	border-collapse: collapse;
}

.comment-body table>thead>tr>th {
	text-align: left;
	border-bottom: 1px solid;
}

.comment-body table>thead>tr>th,
.comment-body table>thead>tr>td,
.comment-body table>tbody>tr>th,
.comment-body table>tbody>tr>td {
	padding: 5px 10px;
}

.comment-body table>tbody>tr+tr>td {
	border-top: 1px solid;
}

code {
	font-family: var(--vscode-editor-font-family), Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback';
}

.comment-body .snippet-clipboard-content {
	display: grid;
}

.comment-body video {
	width: 100%;
	border: 1px solid var(--vscode-editorWidget-border);
	border-radius: 4px;
}

.comment-body summary {
	margin-bottom: 8px;
}

.comment-body details summary::marker {
	display: flex;
}

.comment-body details summary svg {
	margin-left: 8px;
}

.comment-body body.wordWrap pre {
	white-space: pre-wrap;
}

.comment-body .mac code {
	font-size: 12px;
	line-height: 18px;
}

.comment-body pre:not(.hljs),
.comment-body pre.hljs code>div {
	padding: 16px;
	border-radius: 3px;
	overflow: auto;
}

.timestamp,
.timestamp:hover {
	color: inherit;
	white-space: nowrap;
}

.timestamp {
	overflow: hidden;
	text-overflow: ellipsis;
}

/** Theming */

.comment-body pre code {
	color: var(--vscode-editor-foreground);
}

.vscode-light .comment-body pre:not(.hljs),
.vscode-light .comment-body code>div {
	background-color: rgba(220, 220, 220, 0.4);
}

.vscode-dark .comment-body pre:not(.hljs),
.vscode-dark .comment-body code>div {
	background-color: rgba(10, 10, 10, 0.4);
}

.vscode-high-contrast .comment-body pre:not(.hljs),
.vscode-high-contrast .comment-body code>div {
	background-color: var(--vscode-editor-background);
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-body h1 {
	border: 1px solid rgb(0, 0, 0);
}

.vscode-high-contrast .comment-container .review-comment-header,
.vscode-high-contrast #status-checks {
	background: none;
	border: 1px solid var(--vscode-panel-border);
}

.vscode-high-contrast .comment-container .comment-body,
.vscode-high-contrast .review-comment-container .review-body {
	border: 1px solid var(--vscode-panel-border);
}

.vscode-light .comment-body table>thead>tr>th {
	border-color: rgba(0, 0, 0, 0.69);
}

.vscode-dark .comment-body table>thead>tr>th {
	border-color: rgba(255, 255, 255, 0.69);
}

.vscode-light .comment-body h1,
.vscode-light .comment-body hr,
.vscode-light .comment-body table>tbody>tr+tr>td {
	border-color: rgba(0, 0, 0, 0.18);
}

.vscode-dark .comment-body h1,
.vscode-dark .comment-body hr,
.vscode-dark .comment-body table>tbody>tr+tr>td {
	border-color: rgba(255, 255, 255, 0.18);
}

.review-comment-body .diff-container {
	border-radius: 4px;
	border: 1px solid var(--vscode-editorHoverWidget-border);
}

.review-comment-body .diff-container .review-comment-container .comment-container {
	padding-top: 0;
}

.review-comment-body .diff-container .comment-container {
	border: none;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar-container {
	margin-right: 4px;
}

.review-comment-body .diff-container .review-comment-container .review-comment-header .avatar {
	width: 18px;
	height: 18px;
}

.review-comment-body .diff-container .diff {
	border-top: 1px solid var(--vscode-editorWidget-border);
	overflow: scroll;
}

.resolved-container {
	padding: 6px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: var(--vscode-editorWidget-background);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.resolved-container .diffPath:hover {
	text-decoration: underline;
	color: var(--vscode-textLink-activeForeground);
	cursor: pointer;
}

.diff .diffLine {
	display: flex;
	font-size: 12px;
	line-height: 20px;
}

.win32 .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Consolas, Inconsolata, 'Courier New', monospace;
}

.darwin .diff .diffLine {
	font-family: var(--vscode-editor-font-family), Monaco, Menlo, Inconsolata, 'Courier New', monospace;
}

.linux .diff .diffLine {
	font-family: var(--vscode-editor-font-family), 'Droid Sans Mono', Inconsolata, 'Courier New', monospace, 'Droid Sans Fallback';
}

.diff .diffLine.add {
	background-color: var(--vscode-diffEditor-insertedTextBackground);
}

.diff .diffLine.delete {
	background-color: var(--vscode-diffEditor-removedTextBackground);
}

.diff .diffLine .diffTypeSign {
	user-select: none;
	padding-right: 5px;
}

.diff .diffLine .lineNumber {
	width: 1%;
	min-width: 50px;
	padding-right: 10px;
	padding-left: 10px;
	font-size: 12px;
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	box-sizing: border-box;
	display: block;
	user-select: none;
	font-family: var(--vscode-editor-font-family);
}

.github-checkbox {
	pointer-events: none;
}

.github-checkbox input {
	color: rgb(84, 84, 84);
	opacity: 0.6;
}

/* High Contrast Mode */

.vscode-high-contrast a:focus {
	outline-color: var(--vscode-contrastActiveBorder);
}

.vscode-high-contrast .title {
	border-bottom: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine {
	background: none;
}

.vscode-high-contrast .resolved-container {
	background: none;
}

.vscode-high-contrast .diff-container {
	border: 1px solid var(--vscode-contrastBorder);
}

.vscode-high-contrast .diff .diffLine.add {
	border: 1px dashed var(--vscode-diffEditor-insertedTextBorder);
}

.vscode-high-contrast .diff .diffLine.delete {
	border: 1px dashed var(--vscode-diffEditor-removedTextBorder);
}

@media (max-width: 925px) {
	#app {
		display: block;
	}

	#sidebar {
		display: grid;
		column-gap: 20px;
		grid-template-columns: 50% 50%;
		padding: 0;
		padding-bottom: 24px;
	}

	.section-content {
		display: flex;
		flex-wrap: wrap;
	}

	.section-item {
		display: flex;
	}

	body .hidden-focusable {
		height: initial;
		overflow: initial;
	}

	.section-header button {
		margin-left: 8px;
		display: flex;
	}

	.section-item .login {
		width: auto;
		margin-right: 4px;
	}

	/* Hides bottom borders on bottom two sections */
	.section:nth-last-child(-n + 2) {
		border-bottom: none;
	}
}

.icon {
	width: 16px;
	height: 16px;
	font-size: 16px;
	display: flex;
}

.action-bar {
	position: absolute;
	display: flex;
	justify-content: space-between;
	z-index: 100;
	top: 9px;
	right: 9px;
}

.flex-action-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	margin-left: 9px;
	min-width: 42px;
}

.action-bar>button,
.flex-action-bar>button {
	margin-left: 4px;
	margin-right: 4px;
}

.title-editing-form {
	flex-grow: 1;
}

.title-editing-form>.form-actions {
	margin-left: 0;
}

/* permalinks */
.comment-body .Box p {
	margin-block-start: 0px;
	margin-block-end: 0px;
}

.comment-body .Box {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .Box-header {
	background-color: var(--vscode-editorWidget-background);
	color: var(--vscode-disabledForeground);
	border-bottom-style: solid;
	border-bottom-width: 1px;
	padding: 8px 16px;
	border-bottom-color: var(--vscode-editorHoverWidget-border);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
}

.comment-body .blob-num {
	word-wrap: break-word;
	box-sizing: border-box;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	min-width: 50px;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	color: var(--vscode-editorLineNumber-foreground);
	line-height: 20px;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	cursor: pointer;
	user-select: none;
}

.comment-body .blob-num::before {
	content: attr(data-line-number);
}

.comment-body .blob-code-inner {
	tab-size: 8;
	border: 0 !important;
	padding-top: 0 !important;
	padding-bottom: 0 !important;
	line-height: 20px;
	vertical-align: top;
	display: table-cell;
	overflow: visible;
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
	word-wrap: anywhere;
	text-indent: 0;
	white-space: pre-wrap;
}

.comment-body .commit-tease-sha {
	font-family: var(--vscode-editor-font-family);
	font-size: 12px;
}

/* Suggestion */
.comment-body .blob-wrapper.data.file .d-table {
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-collapse: unset;
	border-color: var(--vscode-editorHoverWidget-border);
}

.comment-body .js-suggested-changes-blob {
	border-collapse: collapse;
}

.blob-code-deletion,
.blob-num-deletion {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-removedLineBackground);
}

.blob-code-addition,
.blob-num-addition {
	border-collapse: collapse;
	background-color: var(--vscode-diffEditor-insertedLineBackground);
}

.blob-code-marker-addition::before {
	content: "+ ";
}

.blob-code-marker-deletion::before {
	content: "- ";
}
`,""]);const y=I},3645:D=>{"use strict";D.exports=function(S){var Y=[];return Y.toString=l(function(){return this.map(function(ee){var I=S(ee);return ee[2]?"@media ".concat(ee[2]," {").concat(I,"}"):I}).join("")},"toString"),Y.i=function(J,ee,I){typeof J=="string"&&(J=[[null,J,""]]);var y={};if(I)for(var h=0;h<this.length;h++){var H=this[h][0];H!=null&&(y[H]=!0)}for(var z=0;z<J.length;z++){var W=[].concat(J[z]);I&&y[W[0]]||(ee&&(W[2]?W[2]="".concat(ee," and ").concat(W[2]):W[2]=ee),Y.push(W))}},Y}},7484:function(D){(function(S,Y){D.exports=Y()})(this,function(){"use strict";var S="millisecond",Y="second",J="minute",ee="hour",I="day",y="week",h="month",H="quarter",z="year",W="date",s=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ne=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},De=l(function(V,N,A){var $=String(V);return!$||$.length>=N?V:""+Array(N+1-$.length).join(A)+V},"$"),Pe={s:De,z:function(V){var N=-V.utcOffset(),A=Math.abs(N),$=Math.floor(A/60),Z=A%60;return(N<=0?"+":"-")+De($,2,"0")+":"+De(Z,2,"0")},m:l(function V(N,A){if(N.date()<A.date())return-V(A,N);var $=12*(A.year()-N.year())+(A.month()-N.month()),Z=N.clone().add($,h),ue=A-Z<0,ie=N.clone().add($+(ue?-1:1),h);return+(-($+(A-Z)/(ue?Z-ie:ie-Z))||0)},"t"),a:function(V){return V<0?Math.ceil(V)||0:Math.floor(V)},p:function(V){return{M:h,y:z,w:y,d:I,D:W,h:ee,m:J,s:Y,ms:S,Q:H}[V]||String(V||"").toLowerCase().replace(/s$/,"")},u:function(V){return V===void 0}},j="en",K={};K[j]=te;var de=l(function(V){return V instanceof q},"m"),M=l(function(V,N,A){var $;if(!V)return j;if(typeof V=="string")K[V]&&($=V),N&&(K[V]=N,$=V);else{var Z=V.name;K[Z]=V,$=Z}return!A&&$&&(j=$),$||!A&&j},"D"),E=l(function(V,N){if(de(V))return V.clone();var A=typeof N=="object"?N:{};return A.date=V,A.args=arguments,new q(A)},"v"),_=Pe;_.l=M,_.i=de,_.w=function(V,N){return E(V,{locale:N.$L,utc:N.$u,x:N.$x,$offset:N.$offset})};var q=function(){function V(A){this.$L=M(A.locale,null,!0),this.parse(A)}l(V,"d");var N=V.prototype;return N.parse=function(A){this.$d=function($){var Z=$.date,ue=$.utc;if(Z===null)return new Date(NaN);if(_.u(Z))return new Date;if(Z instanceof Date)return new Date(Z);if(typeof Z=="string"&&!/Z$/i.test(Z)){var ie=Z.match(s);if(ie){var re=ie[2]-1||0,fe=(ie[7]||"0").substring(0,3);return ue?new Date(Date.UTC(ie[1],re,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,fe)):new Date(ie[1],re,ie[3]||1,ie[4]||0,ie[5]||0,ie[6]||0,fe)}}return new Date(Z)}(A),this.$x=A.x||{},this.init()},N.init=function(){var A=this.$d;this.$y=A.getFullYear(),this.$M=A.getMonth(),this.$D=A.getDate(),this.$W=A.getDay(),this.$H=A.getHours(),this.$m=A.getMinutes(),this.$s=A.getSeconds(),this.$ms=A.getMilliseconds()},N.$utils=function(){return _},N.isValid=function(){return this.$d.toString()!=="Invalid Date"},N.isSame=function(A,$){var Z=E(A);return this.startOf($)<=Z&&Z<=this.endOf($)},N.isAfter=function(A,$){return E(A)<this.startOf($)},N.isBefore=function(A,$){return this.endOf($)<E(A)},N.$g=function(A,$,Z){return _.u(A)?this[$]:this.set(Z,A)},N.unix=function(){return Math.floor(this.valueOf()/1e3)},N.valueOf=function(){return this.$d.getTime()},N.startOf=function(A,$){var Z=this,ue=!!_.u($)||$,ie=_.p(A),re=l(function(tt,Ae){var F=_.w(Z.$u?Date.UTC(Z.$y,Ae,tt):new Date(Z.$y,Ae,tt),Z);return ue?F:F.endOf(I)},"$"),fe=l(function(tt,Ae){return _.w(Z.toDate()[tt].apply(Z.toDate("s"),(ue?[0,0,0,0]:[23,59,59,999]).slice(Ae)),Z)},"l"),Se=this.$W,Ie=this.$M,Be=this.$D,Ze="set"+(this.$u?"UTC":"");switch(ie){case z:return ue?re(1,0):re(31,11);case h:return ue?re(1,Ie):re(0,Ie+1);case y:var Me=this.$locale().weekStart||0,Te=(Se<Me?Se+7:Se)-Me;return re(ue?Be-Te:Be+(6-Te),Ie);case I:case W:return fe(Ze+"Hours",0);case ee:return fe(Ze+"Minutes",1);case J:return fe(Ze+"Seconds",2);case Y:return fe(Ze+"Milliseconds",3);default:return this.clone()}},N.endOf=function(A){return this.startOf(A,!1)},N.$set=function(A,$){var Z,ue=_.p(A),ie="set"+(this.$u?"UTC":""),re=(Z={},Z[I]=ie+"Date",Z[W]=ie+"Date",Z[h]=ie+"Month",Z[z]=ie+"FullYear",Z[ee]=ie+"Hours",Z[J]=ie+"Minutes",Z[Y]=ie+"Seconds",Z[S]=ie+"Milliseconds",Z)[ue],fe=ue===I?this.$D+($-this.$W):$;if(ue===h||ue===z){var Se=this.clone().set(W,1);Se.$d[re](fe),Se.init(),this.$d=Se.set(W,Math.min(this.$D,Se.daysInMonth())).$d}else re&&this.$d[re](fe);return this.init(),this},N.set=function(A,$){return this.clone().$set(A,$)},N.get=function(A){return this[_.p(A)]()},N.add=function(A,$){var Z,ue=this;A=Number(A);var ie=_.p($),re=l(function(Ie){var Be=E(ue);return _.w(Be.date(Be.date()+Math.round(Ie*A)),ue)},"d");if(ie===h)return this.set(h,this.$M+A);if(ie===z)return this.set(z,this.$y+A);if(ie===I)return re(1);if(ie===y)return re(7);var fe=(Z={},Z[J]=6e4,Z[ee]=36e5,Z[Y]=1e3,Z)[ie]||1,Se=this.$d.getTime()+A*fe;return _.w(Se,this)},N.subtract=function(A,$){return this.add(-1*A,$)},N.format=function(A){var $=this;if(!this.isValid())return"Invalid Date";var Z=A||"YYYY-MM-DDTHH:mm:ssZ",ue=_.z(this),ie=this.$locale(),re=this.$H,fe=this.$m,Se=this.$M,Ie=ie.weekdays,Be=ie.months,Ze=l(function(Ae,F,X,ye){return Ae&&(Ae[F]||Ae($,Z))||X[F].substr(0,ye)},"h"),Me=l(function(Ae){return _.s(re%12||12,Ae,"0")},"d"),Te=ie.meridiem||function(Ae,F,X){var ye=Ae<12?"AM":"PM";return X?ye.toLowerCase():ye},tt={YY:String(this.$y).slice(-2),YYYY:this.$y,M:Se+1,MM:_.s(Se+1,2,"0"),MMM:Ze(ie.monthsShort,Se,Be,3),MMMM:Ze(Be,Se),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:Ze(ie.weekdaysMin,this.$W,Ie,2),ddd:Ze(ie.weekdaysShort,this.$W,Ie,3),dddd:Ie[this.$W],H:String(re),HH:_.s(re,2,"0"),h:Me(1),hh:Me(2),a:Te(re,fe,!0),A:Te(re,fe,!1),m:String(fe),mm:_.s(fe,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:ue};return Z.replace(ne,function(Ae,F){return F||tt[Ae]||ue.replace(":","")})},N.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},N.diff=function(A,$,Z){var ue,ie=_.p($),re=E(A),fe=6e4*(re.utcOffset()-this.utcOffset()),Se=this-re,Ie=_.m(this,re);return Ie=(ue={},ue[z]=Ie/12,ue[h]=Ie,ue[H]=Ie/3,ue[y]=(Se-fe)/6048e5,ue[I]=(Se-fe)/864e5,ue[ee]=Se/36e5,ue[J]=Se/6e4,ue[Y]=Se/1e3,ue)[ie]||Se,Z?Ie:_.a(Ie)},N.daysInMonth=function(){return this.endOf(h).$D},N.$locale=function(){return K[this.$L]},N.locale=function(A,$){if(!A)return this.$L;var Z=this.clone(),ue=M(A,$,!0);return ue&&(Z.$L=ue),Z},N.clone=function(){return _.w(this.$d,this)},N.toDate=function(){return new Date(this.valueOf())},N.toJSON=function(){return this.isValid()?this.toISOString():null},N.toISOString=function(){return this.$d.toISOString()},N.toString=function(){return this.$d.toUTCString()},V}(),R=q.prototype;return E.prototype=R,[["$ms",S],["$s",Y],["$m",J],["$H",ee],["$W",I],["$M",h],["$y",z],["$D",W]].forEach(function(V){R[V[1]]=function(N){return this.$g(N,V[0],V[1])}}),E.extend=function(V,N){return V.$i||(V(N,q,E),V.$i=!0),E},E.locale=M,E.isDayjs=de,E.unix=function(V){return E(1e3*V)},E.en=K[j],E.Ls=K,E.p={},E})},4110:function(D){(function(S,Y){D.exports=Y()})(this,function(){"use strict";return function(S,Y,J){S=S||{};var ee=Y.prototype,I={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function y(H,z,W,s){return ee.fromToBase(H,z,W,s)}l(y,"i"),J.en.relativeTime=I,ee.fromToBase=function(H,z,W,s,ne){for(var te,De,Pe,j=W.$locale().relativeTime||I,K=S.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],de=K.length,M=0;M<de;M+=1){var E=K[M];E.d&&(te=s?J(H).diff(W,E.d,!0):W.diff(H,E.d,!0));var _=(S.rounding||Math.round)(Math.abs(te));if(Pe=te>0,_<=E.r||!E.r){_<=1&&M>0&&(E=K[M-1]);var q=j[E.l];ne&&(_=ne(""+_)),De=typeof q=="string"?q.replace("%d",_):q(_,z,E.l,Pe);break}}if(z)return De;var R=Pe?j.future:j.past;return typeof R=="function"?R(De):R.replace("%s",De)},ee.to=function(H,z){return y(H,z,this,!0)},ee.from=function(H,z){return y(H,z,this)};var h=l(function(H){return H.$u?J.utc():J()},"d");ee.toNow=function(H){return this.to(h(this),H)},ee.fromNow=function(H){return this.from(h(this),H)}}})},660:function(D){(function(S,Y){D.exports=Y()})(this,function(){"use strict";return function(S,Y,J){J.updateLocale=function(ee,I){var y=J.Ls[ee];if(y)return(I?Object.keys(I):[]).forEach(function(h){y[h]=I[h]}),y}}})},296:D=>{function S(Y,J,ee){var I,y,h,H,z;J==null&&(J=100);function W(){var ne=Date.now()-H;ne<J&&ne>=0?I=setTimeout(W,J-ne):(I=null,ee||(z=Y.apply(h,y),h=y=null))}l(W,"later");var s=l(function(){h=this,y=arguments,H=Date.now();var ne=ee&&!I;return I||(I=setTimeout(W,J)),ne&&(z=Y.apply(h,y),h=y=null),z},"debounced");return s.clear=function(){I&&(clearTimeout(I),I=null)},s.flush=function(){I&&(z=Y.apply(h,y),h=y=null,clearTimeout(I),I=null)},s}l(S,"debounce"),S.debounce=S,D.exports=S},7187:D=>{"use strict";var S=typeof Reflect=="object"?Reflect:null,Y=S&&typeof S.apply=="function"?S.apply:l(function(E,_,q){return Function.prototype.apply.call(E,_,q)},"ReflectApply"),J;S&&typeof S.ownKeys=="function"?J=S.ownKeys:Object.getOwnPropertySymbols?J=l(function(E){return Object.getOwnPropertyNames(E).concat(Object.getOwnPropertySymbols(E))},"ReflectOwnKeys"):J=l(function(E){return Object.getOwnPropertyNames(E)},"ReflectOwnKeys");function ee(M){console&&console.warn&&console.warn(M)}l(ee,"ProcessEmitWarning");var I=Number.isNaN||l(function(E){return E!==E},"NumberIsNaN");function y(){y.init.call(this)}l(y,"EventEmitter"),D.exports=y,D.exports.once=de,y.EventEmitter=y,y.prototype._events=void 0,y.prototype._eventsCount=0,y.prototype._maxListeners=void 0;var h=10;function H(M){if(typeof M!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof M)}l(H,"checkListener"),Object.defineProperty(y,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(M){if(typeof M!="number"||M<0||I(M))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+M+".");h=M}}),y.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},y.prototype.setMaxListeners=l(function(E){if(typeof E!="number"||E<0||I(E))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+E+".");return this._maxListeners=E,this},"setMaxListeners");function z(M){return M._maxListeners===void 0?y.defaultMaxListeners:M._maxListeners}l(z,"_getMaxListeners"),y.prototype.getMaxListeners=l(function(){return z(this)},"getMaxListeners"),y.prototype.emit=l(function(E){for(var _=[],q=1;q<arguments.length;q++)_.push(arguments[q]);var R=E==="error",V=this._events;if(V!==void 0)R=R&&V.error===void 0;else if(!R)return!1;if(R){var N;if(_.length>0&&(N=_[0]),N instanceof Error)throw N;var A=new Error("Unhandled error."+(N?" ("+N.message+")":""));throw A.context=N,A}var $=V[E];if($===void 0)return!1;if(typeof $=="function")Y($,this,_);else for(var Z=$.length,ue=Pe($,Z),q=0;q<Z;++q)Y(ue[q],this,_);return!0},"emit");function W(M,E,_,q){var R,V,N;if(H(_),V=M._events,V===void 0?(V=M._events=Object.create(null),M._eventsCount=0):(V.newListener!==void 0&&(M.emit("newListener",E,_.listener?_.listener:_),V=M._events),N=V[E]),N===void 0)N=V[E]=_,++M._eventsCount;else if(typeof N=="function"?N=V[E]=q?[_,N]:[N,_]:q?N.unshift(_):N.push(_),R=z(M),R>0&&N.length>R&&!N.warned){N.warned=!0;var A=new Error("Possible EventEmitter memory leak detected. "+N.length+" "+String(E)+" listeners added. Use emitter.setMaxListeners() to increase limit");A.name="MaxListenersExceededWarning",A.emitter=M,A.type=E,A.count=N.length,ee(A)}return M}l(W,"_addListener"),y.prototype.addListener=l(function(E,_){return W(this,E,_,!1)},"addListener"),y.prototype.on=y.prototype.addListener,y.prototype.prependListener=l(function(E,_){return W(this,E,_,!0)},"prependListener");function s(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}l(s,"onceWrapper");function ne(M,E,_){var q={fired:!1,wrapFn:void 0,target:M,type:E,listener:_},R=s.bind(q);return R.listener=_,q.wrapFn=R,R}l(ne,"_onceWrap"),y.prototype.once=l(function(E,_){return H(_),this.on(E,ne(this,E,_)),this},"once"),y.prototype.prependOnceListener=l(function(E,_){return H(_),this.prependListener(E,ne(this,E,_)),this},"prependOnceListener"),y.prototype.removeListener=l(function(E,_){var q,R,V,N,A;if(H(_),R=this._events,R===void 0)return this;if(q=R[E],q===void 0)return this;if(q===_||q.listener===_)--this._eventsCount==0?this._events=Object.create(null):(delete R[E],R.removeListener&&this.emit("removeListener",E,q.listener||_));else if(typeof q!="function"){for(V=-1,N=q.length-1;N>=0;N--)if(q[N]===_||q[N].listener===_){A=q[N].listener,V=N;break}if(V<0)return this;V===0?q.shift():j(q,V),q.length===1&&(R[E]=q[0]),R.removeListener!==void 0&&this.emit("removeListener",E,A||_)}return this},"removeListener"),y.prototype.off=y.prototype.removeListener,y.prototype.removeAllListeners=l(function(E){var _,q,R;if(q=this._events,q===void 0)return this;if(q.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):q[E]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete q[E]),this;if(arguments.length===0){var V=Object.keys(q),N;for(R=0;R<V.length;++R)N=V[R],N!=="removeListener"&&this.removeAllListeners(N);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(_=q[E],typeof _=="function")this.removeListener(E,_);else if(_!==void 0)for(R=_.length-1;R>=0;R--)this.removeListener(E,_[R]);return this},"removeAllListeners");function te(M,E,_){var q=M._events;if(q===void 0)return[];var R=q[E];return R===void 0?[]:typeof R=="function"?_?[R.listener||R]:[R]:_?K(R):Pe(R,R.length)}l(te,"_listeners"),y.prototype.listeners=l(function(E){return te(this,E,!0)},"listeners"),y.prototype.rawListeners=l(function(E){return te(this,E,!1)},"rawListeners"),y.listenerCount=function(M,E){return typeof M.listenerCount=="function"?M.listenerCount(E):De.call(M,E)},y.prototype.listenerCount=De;function De(M){var E=this._events;if(E!==void 0){var _=E[M];if(typeof _=="function")return 1;if(_!==void 0)return _.length}return 0}l(De,"listenerCount"),y.prototype.eventNames=l(function(){return this._eventsCount>0?J(this._events):[]},"eventNames");function Pe(M,E){for(var _=new Array(E),q=0;q<E;++q)_[q]=M[q];return _}l(Pe,"arrayClone");function j(M,E){for(;E+1<M.length;E++)M[E]=M[E+1];M.pop()}l(j,"spliceOne");function K(M){for(var E=new Array(M.length),_=0;_<E.length;++_)E[_]=M[_].listener||M[_];return E}l(K,"unwrapListeners");function de(M,E){return new Promise(function(_,q){function R(){V!==void 0&&M.removeListener("error",V),_([].slice.call(arguments))}l(R,"eventListener");var V;E!=="error"&&(V=l(function(A){M.removeListener(E,R),q(A)},"errorListener"),M.once("error",V)),M.once(E,R)})}l(de,"once")},7418:D=>{"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var S=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;function ee(y){if(y==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(y)}l(ee,"toObject");function I(){try{if(!Object.assign)return!1;var y=new String("abc");if(y[5]="de",Object.getOwnPropertyNames(y)[0]==="5")return!1;for(var h={},H=0;H<10;H++)h["_"+String.fromCharCode(H)]=H;var z=Object.getOwnPropertyNames(h).map(function(s){return h[s]});if(z.join("")!=="0123456789")return!1;var W={};return"abcdefghijklmnopqrst".split("").forEach(function(s){W[s]=s}),Object.keys(Object.assign({},W)).join("")==="abcdefghijklmnopqrst"}catch(s){return!1}}l(I,"shouldUseNative"),D.exports=I()?Object.assign:function(y,h){for(var H,z=ee(y),W,s=1;s<arguments.length;s++){H=Object(arguments[s]);for(var ne in H)Y.call(H,ne)&&(z[ne]=H[ne]);if(S){W=S(H);for(var te=0;te<W.length;te++)J.call(H,W[te])&&(z[W[te]]=H[W[te]])}}return z}},6470:D=>{"use strict";function S(I){if(typeof I!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(I))}l(S,"assertPath");function Y(I,y){for(var h="",H=0,z=-1,W=0,s,ne=0;ne<=I.length;++ne){if(ne<I.length)s=I.charCodeAt(ne);else{if(s===47)break;s=47}if(s===47){if(!(z===ne-1||W===1))if(z!==ne-1&&W===2){if(h.length<2||H!==2||h.charCodeAt(h.length-1)!==46||h.charCodeAt(h.length-2)!==46){if(h.length>2){var te=h.lastIndexOf("/");if(te!==h.length-1){te===-1?(h="",H=0):(h=h.slice(0,te),H=h.length-1-h.lastIndexOf("/")),z=ne,W=0;continue}}else if(h.length===2||h.length===1){h="",H=0,z=ne,W=0;continue}}y&&(h.length>0?h+="/..":h="..",H=2)}else h.length>0?h+="/"+I.slice(z+1,ne):h=I.slice(z+1,ne),H=ne-z-1;z=ne,W=0}else s===46&&W!==-1?++W:W=-1}return h}l(Y,"normalizeStringPosix");function J(I,y){var h=y.dir||y.root,H=y.base||(y.name||"")+(y.ext||"");return h?h===y.root?h+H:h+I+H:H}l(J,"_format");var ee={resolve:l(function(){for(var y="",h=!1,H,z=arguments.length-1;z>=-1&&!h;z--){var W;z>=0?W=arguments[z]:(H===void 0&&(H=process.cwd()),W=H),S(W),W.length!==0&&(y=W+"/"+y,h=W.charCodeAt(0)===47)}return y=Y(y,!h),h?y.length>0?"/"+y:"/":y.length>0?y:"."},"resolve"),normalize:l(function(y){if(S(y),y.length===0)return".";var h=y.charCodeAt(0)===47,H=y.charCodeAt(y.length-1)===47;return y=Y(y,!h),y.length===0&&!h&&(y="."),y.length>0&&H&&(y+="/"),h?"/"+y:y},"normalize"),isAbsolute:l(function(y){return S(y),y.length>0&&y.charCodeAt(0)===47},"isAbsolute"),join:l(function(){if(arguments.length===0)return".";for(var y,h=0;h<arguments.length;++h){var H=arguments[h];S(H),H.length>0&&(y===void 0?y=H:y+="/"+H)}return y===void 0?".":ee.normalize(y)},"join"),relative:l(function(y,h){if(S(y),S(h),y===h||(y=ee.resolve(y),h=ee.resolve(h),y===h))return"";for(var H=1;H<y.length&&y.charCodeAt(H)===47;++H);for(var z=y.length,W=z-H,s=1;s<h.length&&h.charCodeAt(s)===47;++s);for(var ne=h.length,te=ne-s,De=W<te?W:te,Pe=-1,j=0;j<=De;++j){if(j===De){if(te>De){if(h.charCodeAt(s+j)===47)return h.slice(s+j+1);if(j===0)return h.slice(s+j)}else W>De&&(y.charCodeAt(H+j)===47?Pe=j:j===0&&(Pe=0));break}var K=y.charCodeAt(H+j),de=h.charCodeAt(s+j);if(K!==de)break;K===47&&(Pe=j)}var M="";for(j=H+Pe+1;j<=z;++j)(j===z||y.charCodeAt(j)===47)&&(M.length===0?M+="..":M+="/..");return M.length>0?M+h.slice(s+Pe):(s+=Pe,h.charCodeAt(s)===47&&++s,h.slice(s))},"relative"),_makeLong:l(function(y){return y},"_makeLong"),dirname:l(function(y){if(S(y),y.length===0)return".";for(var h=y.charCodeAt(0),H=h===47,z=-1,W=!0,s=y.length-1;s>=1;--s)if(h=y.charCodeAt(s),h===47){if(!W){z=s;break}}else W=!1;return z===-1?H?"/":".":H&&z===1?"//":y.slice(0,z)},"dirname"),basename:l(function(y,h){if(h!==void 0&&typeof h!="string")throw new TypeError('"ext" argument must be a string');S(y);var H=0,z=-1,W=!0,s;if(h!==void 0&&h.length>0&&h.length<=y.length){if(h.length===y.length&&h===y)return"";var ne=h.length-1,te=-1;for(s=y.length-1;s>=0;--s){var De=y.charCodeAt(s);if(De===47){if(!W){H=s+1;break}}else te===-1&&(W=!1,te=s+1),ne>=0&&(De===h.charCodeAt(ne)?--ne==-1&&(z=s):(ne=-1,z=te))}return H===z?z=te:z===-1&&(z=y.length),y.slice(H,z)}else{for(s=y.length-1;s>=0;--s)if(y.charCodeAt(s)===47){if(!W){H=s+1;break}}else z===-1&&(W=!1,z=s+1);return z===-1?"":y.slice(H,z)}},"basename"),extname:l(function(y){S(y);for(var h=-1,H=0,z=-1,W=!0,s=0,ne=y.length-1;ne>=0;--ne){var te=y.charCodeAt(ne);if(te===47){if(!W){H=ne+1;break}continue}z===-1&&(W=!1,z=ne+1),te===46?h===-1?h=ne:s!==1&&(s=1):h!==-1&&(s=-1)}return h===-1||z===-1||s===0||s===1&&h===z-1&&h===H+1?"":y.slice(h,z)},"extname"),format:l(function(y){if(y===null||typeof y!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof y);return J("/",y)},"format"),parse:l(function(y){S(y);var h={root:"",dir:"",base:"",ext:"",name:""};if(y.length===0)return h;var H=y.charCodeAt(0),z=H===47,W;z?(h.root="/",W=1):W=0;for(var s=-1,ne=0,te=-1,De=!0,Pe=y.length-1,j=0;Pe>=W;--Pe){if(H=y.charCodeAt(Pe),H===47){if(!De){ne=Pe+1;break}continue}te===-1&&(De=!1,te=Pe+1),H===46?s===-1?s=Pe:j!==1&&(j=1):s!==-1&&(j=-1)}return s===-1||te===-1||j===0||j===1&&s===te-1&&s===ne+1?te!==-1&&(ne===0&&z?h.base=h.name=y.slice(1,te):h.base=h.name=y.slice(ne,te)):(ne===0&&z?(h.name=y.slice(1,s),h.base=y.slice(1,te)):(h.name=y.slice(ne,s),h.base=y.slice(ne,te)),h.ext=y.slice(s,te)),ne>0?h.dir=y.slice(0,ne-1):z&&(h.dir="/"),h},"parse"),sep:"/",delimiter:":",win32:null,posix:null};ee.posix=ee,D.exports=ee},4448:(D,S,Y)=>{"use strict";var J;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee=Y(7294),I=Y(7418),y=Y(3840);function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(l(h,"u"),!ee)throw Error(h(227));function H(e,t,n,r,i,u,d,p,k){var b=Array.prototype.slice.call(arguments,3);try{t.apply(n,b)}catch(G){this.onError(G)}}l(H,"ba");var z=!1,W=null,s=!1,ne=null,te={onError:function(e){z=!0,W=e}};function De(e,t,n,r,i,u,d,p,k){z=!1,W=null,H.apply(te,arguments)}l(De,"ja");function Pe(e,t,n,r,i,u,d,p,k){if(De.apply(this,arguments),z){if(z){var b=W;z=!1,W=null}else throw Error(h(198));s||(s=!0,ne=b)}}l(Pe,"ka");var j=null,K=null,de=null;function M(e,t,n){var r=e.type||"unknown-event";e.currentTarget=de(n),Pe(r,t,void 0,e),e.currentTarget=null}l(M,"oa");var E=null,_={};function q(){if(E)for(var e in _){var t=_[e],n=E.indexOf(e);if(!(-1<n))throw Error(h(96,e));if(!V[n]){if(!t.extractEvents)throw Error(h(97,e));V[n]=t,n=t.eventTypes;for(var r in n){var i=void 0,u=n[r],d=t,p=r;if(N.hasOwnProperty(p))throw Error(h(99,p));N[p]=u;var k=u.phasedRegistrationNames;if(k){for(i in k)k.hasOwnProperty(i)&&R(k[i],d,p);i=!0}else u.registrationName?(R(u.registrationName,d,p),i=!0):i=!1;if(!i)throw Error(h(98,r,e))}}}}l(q,"ra");function R(e,t,n){if(A[e])throw Error(h(100,e));A[e]=t,$[e]=t.eventTypes[n].dependencies}l(R,"ua");var V=[],N={},A={},$={};function Z(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!_.hasOwnProperty(n)||_[n]!==r){if(_[n])throw Error(h(102,n));_[n]=r,t=!0}}t&&q()}l(Z,"xa");var ue=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ie=null,re=null,fe=null;function Se(e){if(e=K(e)){if(typeof ie!="function")throw Error(h(280));var t=e.stateNode;t&&(t=j(t),ie(e.stateNode,e.type,t))}}l(Se,"Ca");function Ie(e){re?fe?fe.push(e):fe=[e]:re=e}l(Ie,"Da");function Be(){if(re){var e=re,t=fe;if(fe=re=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}l(Be,"Ea");function Ze(e,t){return e(t)}l(Ze,"Fa");function Me(e,t,n,r,i){return e(t,n,r,i)}l(Me,"Ga");function Te(){}l(Te,"Ha");var tt=Ze,Ae=!1,F=!1;function X(){(re!==null||fe!==null)&&(Te(),Be())}l(X,"La");function ye(e,t,n){if(F)return e(t,n);F=!0;try{return tt(e,t,n)}finally{F=!1,X()}}l(ye,"Ma");var g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P=Object.prototype.hasOwnProperty,pe={},we={};function xe(e){return P.call(we,e)?!0:P.call(pe,e)?!1:g.test(e)?we[e]=!0:(pe[e]=!0,!1)}l(xe,"Ra");function ze(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}l(ze,"Sa");function ot(e,t,n,r){if(t===null||typeof t=="undefined"||ze(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}l(ot,"Ta");function Ee(e,t,n,r,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=u}l(Ee,"v");var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ee(e,0,!1,e,null,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ee(t,1,!1,e[1],null,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ee(e,2,!1,e,null,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ee(e,3,!0,e,null,!1)}),["capture","download"].forEach(function(e){Re[e]=new Ee(e,4,!1,e,null,!1)}),["cols","rows","size","span"].forEach(function(e){Re[e]=new Ee(e,6,!1,e,null,!1)}),["rowSpan","start"].forEach(function(e){Re[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1)});var pt=/[\-:]([a-z])/g;function Fr(e){return e[1].toUpperCase()}l(Fr,"Va"),"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pt,Fr);Re[t]=new Ee(t,1,!1,e,null,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pt,Fr);Re[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pt,Fr);Re[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)}),["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1)}),Re.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach(function(e){Re[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0)});var dt=ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;dt.hasOwnProperty("ReactCurrentDispatcher")||(dt.ReactCurrentDispatcher={current:null}),dt.hasOwnProperty("ReactCurrentBatchConfig")||(dt.ReactCurrentBatchConfig={suspense:null});function Do(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null,u=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");u||(ot(t,n,i,r)&&(n=null),r||i===null?xe(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}l(Do,"Xa");var al=/^(.*)[\\\/]/,it=typeof Symbol=="function"&&Symbol.for,ar=it?Symbol.for("react.element"):60103,dn=it?Symbol.for("react.portal"):60106,en=it?Symbol.for("react.fragment"):60107,ur=it?Symbol.for("react.strict_mode"):60108,Dn=it?Symbol.for("react.profiler"):60114,fn=it?Symbol.for("react.provider"):60109,Pt=it?Symbol.for("react.context"):60110,ul=it?Symbol.for("react.concurrent_mode"):60111,Io=it?Symbol.for("react.forward_ref"):60112,zr=it?Symbol.for("react.suspense"):60113,Ao=it?Symbol.for("react.suspense_list"):60120,Ho=it?Symbol.for("react.memo"):60115,cl=it?Symbol.for("react.lazy"):60116,dl=it?Symbol.for("react.block"):60121,fl=typeof Symbol=="function"&&Symbol.iterator;function cr(e){return e===null||typeof e!="object"?null:(e=fl&&e[fl]||e["@@iterator"],typeof e=="function"?e:null)}l(cr,"nb");function js(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}l(js,"ob");function $t(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case dn:return"Portal";case Dn:return"Profiler";case ur:return"StrictMode";case zr:return"Suspense";case Ao:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pt:return"Context.Consumer";case fn:return"Context.Provider";case Io:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case Ho:return $t(e.type);case dl:return $t(e.render);case cl:if(e=e._status===1?e._result:null)return $t(e)}return null}l($t,"pb");function Vr(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,u=$t(e.type);n=null,r&&(n=$t(r.type)),r=u,u="",i?u=" (at "+i.fileName.replace(al,"")+":"+i.lineNumber+")":n&&(u=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+u}t+=n,e=e.return}while(e);return t}l(Vr,"qb");function jt(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}l(jt,"rb");function lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}l(lt,"sb");function ml(e){var t=lt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){r=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}l(ml,"tb");function $r(e){e._valueTracker||(e._valueTracker=ml(e))}l($r,"xb");function Fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lt(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}l(Fo,"yb");function mn(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}l(mn,"zb");function zo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}l(zo,"Ab");function Vo(e,t){t=t.checked,t!=null&&Do(e,"checked",t,!1)}l(Vo,"Bb");function jr(e,t){Vo(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Br(e,t.type,n):t.hasOwnProperty("defaultValue")&&Br(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}l(jr,"Cb");function $o(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}l($o,"Eb");function Br(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}l(Br,"Db");function Ke(e){var t="";return ee.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}l(Ke,"Fb");function jo(e,t){return e=I({children:void 0},t),(t=Ke(t.children))&&(e.children=t),e}l(jo,"Gb");function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}l(pn,"Hb");function Ur(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}l(Ur,"Ib");function Bo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}l(Bo,"Jb");function pl(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}l(pl,"Kb");function hl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}l(hl,"Lb");var vl={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Uo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}l(Uo,"Nb");function Wo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}l(Wo,"Ob");var In,Wr=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==vl.svg||"innerHTML"in e)e.innerHTML=t;else{for(In=In||document.createElement("div"),In.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=In.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function An(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}l(An,"Rb");function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}l(dr,"Sb");var Hn={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},qo={},gl={};ue&&(gl=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Fn(e){if(qo[e])return qo[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gl)return qo[e]=t[n];return e}l(Fn,"Wb");var fr=Fn("animationend"),qr=Fn("animationiteration"),Zr=Fn("animationstart"),Zo=Fn("transitionend"),hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qo=new(typeof WeakMap=="function"?WeakMap:Map);function mr(e){var t=Qo.get(e);return t===void 0&&(t=new Map,Qo.set(e,t)),t}l(mr,"cc");function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.effectTag&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}l(Bt,"dc");function pr(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}l(pr,"ec");function Qr(e){if(Bt(e)!==e)throw Error(h(188))}l(Qr,"fc");function Kr(e){var t=e.alternate;if(!t){if(t=Bt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var u=i.alternate;if(u===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===n)return Qr(i),e;if(u===r)return Qr(i),t;u=u.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=u;else{for(var d=!1,p=i.child;p;){if(p===n){d=!0,n=i,r=u;break}if(p===r){d=!0,r=i,n=u;break}p=p.sibling}if(!d){for(p=u.child;p;){if(p===n){d=!0,n=u,r=i;break}if(p===r){d=!0,r=u,n=i;break}p=p.sibling}if(!d)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}l(Kr,"gc");function Yr(e){if(e=Kr(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}l(Yr,"hc");function tn(e,t){if(t==null)throw Error(h(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}l(tn,"ic");function hr(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}l(hr,"jc");var vn=null;function Xr(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)M(e,t[r],n[r]);else t&&M(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}l(Xr,"lc");function zn(e){if(e!==null&&(vn=tn(vn,e)),e=vn,vn=null,e){if(hr(e,Xr),vn)throw Error(h(95));if(s)throw e=ne,s=!1,ne=null,e}}l(zn,"mc");function vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}l(vr,"nc");function yl(e){if(!ue)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}l(yl,"oc");var Ut=[];function nn(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Ut.length&&Ut.push(e)}l(nn,"qc");function wl(e,t,n,r){if(Ut.length){var i=Ut.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}l(wl,"rc");function Cl(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=qn(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=vr(e.nativeEvent);r=e.topLevelType;var u=e.nativeEvent,d=e.eventSystemFlags;n===0&&(d|=64);for(var p=null,k=0;k<V.length;k++){var b=V[k];b&&(b=b.extractEvents(r,t,u,i,d))&&(p=tn(p,b))}zn(p)}}l(Cl,"sc");function gn(e,t,n){if(!n.has(e)){switch(e){case"scroll":rn(t,"scroll",!0);break;case"focus":case"blur":rn(t,"focus",!0),rn(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":yl(e)&&rn(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:hn.indexOf(e)===-1&&ke(e,t)}n.set(e,null)}}l(gn,"uc");var xl,gr,Rt,Ot=!1,bt=[],wt=null,_t=null,Wt=null,Vn=new Map,yn=new Map,$n=[],Gr="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),El="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function yr(e,t){var n=mr(t);Gr.forEach(function(r){gn(r,t,n)}),El.forEach(function(r){gn(r,t,n)})}l(yr,"Jc");function wr(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:i,container:r}}l(wr,"Kc");function kl(e,t){switch(e){case"focus":case"blur":wt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}l(kl,"Lc");function jn(e,t,n,r,i,u){return e===null||e.nativeEvent!==u?(e=wr(t,n,r,i,u),t!==null&&(t=Zn(t),t!==null&&gr(t)),e):(e.eventSystemFlags|=r,e)}l(jn,"Mc");function bl(e,t,n,r,i){switch(t){case"focus":return wt=jn(wt,e,t,n,r,i),!0;case"dragenter":return _t=jn(_t,e,t,n,r,i),!0;case"mouseover":return Wt=jn(Wt,e,t,n,r,i),!0;case"pointerover":var u=i.pointerId;return Vn.set(u,jn(Vn.get(u)||null,e,t,n,r,i)),!0;case"gotpointercapture":return u=i.pointerId,yn.set(u,jn(yn.get(u)||null,e,t,n,r,i)),!0}return!1}l(bl,"Oc");function _l(e){var t=qn(e.target);if(t!==null){var n=Bt(t);if(n!==null){if(t=n.tag,t===13){if(t=pr(n),t!==null){e.blockedOn=t,y.unstable_runWithPriority(e.priority,function(){Rt(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}l(_l,"Pc");function Cr(e){if(e.blockedOn!==null)return!1;var t=no(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=Zn(t);return n!==null&&gr(n),e.blockedOn=t,!1}return!0}l(Cr,"Qc");function Ko(e,t,n){Cr(e)&&n.delete(t)}l(Ko,"Sc");function Ll(){for(Ot=!1;0<bt.length;){var e=bt[0];if(e.blockedOn!==null){e=Zn(e.blockedOn),e!==null&&xl(e);break}var t=no(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:bt.shift()}wt!==null&&Cr(wt)&&(wt=null),_t!==null&&Cr(_t)&&(_t=null),Wt!==null&&Cr(Wt)&&(Wt=null),Vn.forEach(Ko),yn.forEach(Ko)}l(Ll,"Tc");function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ot||(Ot=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Ll)))}l(Bn,"Uc");function Jr(e){function t(i){return Bn(i,e)}if(l(t,"b"),0<bt.length){Bn(bt[0],e);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Bn(wt,e),_t!==null&&Bn(_t,e),Wt!==null&&Bn(Wt,e),Vn.forEach(t),yn.forEach(t),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)_l(n),n.blockedOn===null&&$n.shift()}l(Jr,"Vc");var Yo={},Xo=new Map,eo=new Map,Tl=["abort","abort",fr,"animationEnd",qr,"animationIteration",Zr,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Zo,"transitionEnd","waiting","waiting"];function wn(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],u="on"+(i[0].toUpperCase()+i.slice(1));u={phasedRegistrationNames:{bubbled:u,captured:u+"Capture"},dependencies:[r],eventPriority:t},eo.set(r,t),Xo.set(r,u),Yo[i]=u}}l(wn,"ad"),wn("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),wn("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),wn(Tl,2);for(var Go="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),to=0;to<Go.length;to++)eo.set(Go[to],0);var Sl=y.unstable_UserBlockingPriority,Ml=y.unstable_runWithPriority,xr=!0;function ke(e,t){rn(t,e,!1)}l(ke,"F");function rn(e,t,n){var r=eo.get(t);switch(r===void 0?2:r){case 0:r=Nl.bind(null,t,1,e);break;case 1:r=Pl.bind(null,t,1,e);break;default:r=Er.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}l(rn,"vc");function Nl(e,t,n,r){Ae||Te();var i=Er,u=Ae;Ae=!0;try{Me(i,e,t,n,r)}finally{(Ae=u)||X()}}l(Nl,"gd");function Pl(e,t,n,r){Ml(Sl,Er.bind(null,e,t,n,r))}l(Pl,"hd");function Er(e,t,n,r){if(xr)if(0<bt.length&&-1<Gr.indexOf(e))e=wr(null,e,t,n,r),bt.push(e);else{var i=no(e,t,n,r);if(i===null)kl(e,r);else if(-1<Gr.indexOf(e))e=wr(i,e,t,n,r),bt.push(e);else if(!bl(i,e,t,n,r)){kl(e,r),e=wl(e,r,null,t);try{ye(Cl,e)}finally{nn(e)}}}}l(Er,"id");function no(e,t,n,r){if(n=vr(r),n=qn(n),n!==null){var i=Bt(n);if(i===null)n=null;else{var u=i.tag;if(u===13){if(n=pr(i),n!==null)return n;n=null}else if(u===3){if(i.stateNode.hydrate)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=wl(e,r,n,t);try{ye(Cl,e)}finally{nn(e)}return null}l(no,"Rc");var Cn={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rl=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Rl.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Jo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}l(Jo,"ld");function ei(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}l(ei,"md");var Ol=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ro(e,t){if(t){if(Ol[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62,""))}}l(ro,"od");function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}l(oo,"pd");var ti=vl.html;function Dt(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=mr(e);t=$[t];for(var r=0;r<t.length;r++)gn(t[r],e,n)}l(Dt,"rd");function kr(){}l(kr,"sd");function ni(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch(t){return e.body}}l(ni,"td");function ri(e){for(;e&&e.firstChild;)e=e.firstChild;return e}l(ri,"ud");function oi(e,t){var n=ri(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ri(n)}}l(oi,"vd");function ii(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ii(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}l(ii,"wd");function li(){for(var e=window,t=ni();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=ni(e.document)}return t}l(li,"xd");function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}l(io,"yd");var Dl="$",si="/$",lo="$?",so="$!",ao=null,uo=null;function Un(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}l(Un,"Fd");function br(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}l(br,"Gd");var co=typeof setTimeout=="function"?setTimeout:void 0,Il=typeof clearTimeout=="function"?clearTimeout:void 0;function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}l(on,"Jd");function ai(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Dl||n===so||n===lo){if(t===0)return e;t--}else n===si&&t++}e=e.previousSibling}return null}l(ai,"Kd");var fo=Math.random().toString(36).slice(2),qt="__reactInternalInstance$"+fo,mo="__reactEventHandlers$"+fo,Wn="__reactContainere$"+fo;function qn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ai(e);e!==null;){if(n=e[qt])return n;e=ai(e)}return t}e=n,n=e.parentNode}return null}l(qn,"tc");function Zn(e){return e=e[qt]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}l(Zn,"Nc");function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}l(Zt,"Pd");function po(e){return e[mo]||null}l(po,"Qd");function It(e){do e=e.return;while(e&&e.tag!==5);return e||null}l(It,"Rd");function ui(e,t){var n=e.stateNode;if(!n)return null;var r=j(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}l(ui,"Sd");function ci(e,t,n){(t=ui(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=tn(n._dispatchListeners,t),n._dispatchInstances=tn(n._dispatchInstances,e))}l(ci,"Td");function ho(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=It(t);for(t=n.length;0<t--;)ci(n[t],"captured",e);for(t=0;t<n.length;t++)ci(n[t],"bubbled",e)}}l(ho,"Ud");function Qn(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=ui(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=tn(n._dispatchListeners,t),n._dispatchInstances=tn(n._dispatchInstances,e))}l(Qn,"Vd");function Al(e){e&&e.dispatchConfig.registrationName&&Qn(e._targetInst,null,e)}l(Al,"Wd");function ln(e){hr(e,ho)}l(ln,"Xd");var At=null,vo=null,_r=null;function go(){if(_r)return _r;var e,t=vo,n=t.length,r,i="value"in At?At.value:At.textContent,u=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===i[u-r];r++);return _r=i.slice(e,1<r?1-r:void 0)}l(go,"ae");function Lr(){return!0}l(Lr,"be");function yo(){return!1}l(yo,"ce");function ft(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var i in e)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):i==="target"?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Lr:yo,this.isPropagationStopped=yo,this}l(ft,"G"),I(ft.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){this.isPersistent=Lr},isPersistent:yo,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=yo,this._dispatchInstances=this._dispatchListeners=null}}),ft.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ft.extend=function(e){function t(){}l(t,"b");function n(){return r.apply(this,arguments)}l(n,"c");var r=this;t.prototype=r.prototype;var i=new t;return I(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=I({},r.Interface,e),n.extend=r.extend,di(n),n},di(ft);function Bs(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}l(Bs,"ee");function Hl(e){if(!(e instanceof this))throw Error(h(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}l(Hl,"fe");function di(e){e.eventPool=[],e.getPooled=Bs,e.release=Hl}l(di,"de");var Fl=ft.extend({data:null}),zl=ft.extend({data:null}),fi=[9,13,27,32],wo=ue&&"CompositionEvent"in window,Kn=null;ue&&"documentMode"in document&&(Kn=document.documentMode);var Us=ue&&"TextEvent"in window&&!Kn,mi=ue&&(!wo||Kn&&8<Kn&&11>=Kn),pi=String.fromCharCode(32),Ht={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},hi=!1;function vi(e,t){switch(e){case"keyup":return fi.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}l(vi,"qe");function gi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}l(gi,"re");var xn=!1;function Vl(e,t){switch(e){case"compositionend":return gi(t);case"keypress":return t.which!==32?null:(hi=!0,pi);case"textInput":return e=t.data,e===pi&&hi?null:e;default:return null}}l(Vl,"te");function $l(e,t){if(xn)return e==="compositionend"||!wo&&vi(e,t)?(e=go(),_r=vo=At=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mi&&t.locale!=="ko"?null:t.data;default:return null}}l($l,"ue");var jl={eventTypes:Ht,extractEvents:function(e,t,n,r){var i;if(wo)e:{switch(e){case"compositionstart":var u=Ht.compositionStart;break e;case"compositionend":u=Ht.compositionEnd;break e;case"compositionupdate":u=Ht.compositionUpdate;break e}u=void 0}else xn?vi(e,n)&&(u=Ht.compositionEnd):e==="keydown"&&n.keyCode===229&&(u=Ht.compositionStart);return u?(mi&&n.locale!=="ko"&&(xn||u!==Ht.compositionStart?u===Ht.compositionEnd&&xn&&(i=go()):(At=r,vo="value"in At?At.value:At.textContent,xn=!0)),u=Fl.getPooled(u,t,n,r),i?u.data=i:(i=gi(n),i!==null&&(u.data=i)),ln(u),i=u):i=null,(e=Us?Vl(e,n):$l(e,n))?(t=zl.getPooled(Ht.beforeInput,t,n,r),t.data=e,ln(t)):t=null,i===null?t:t===null?i:[i,t]}},Bl={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bl[e.type]:t==="textarea"}l(yi,"xe");var wi={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ci(e,t,n){return e=ft.getPooled(wi.change,e,t,n),e.type="change",Ie(n),ln(e),e}l(Ci,"ze");var o=null,a=null;function f(e){zn(e)}l(f,"Ce");function c(e){var t=Zt(e);if(Fo(t))return e}l(c,"De");function m(e,t){if(e==="change")return t}l(m,"Ee");var v=!1;ue&&(v=yl("input")&&(!document.documentMode||9<document.documentMode));function w(){o&&(o.detachEvent("onpropertychange",T),a=o=null)}l(w,"Ge");function T(e){if(e.propertyName==="value"&&c(a))if(e=Ci(a,e,vr(e)),Ae)zn(e);else{Ae=!0;try{Ze(f,e)}finally{Ae=!1,X()}}}l(T,"He");function O(e,t,n){e==="focus"?(w(),o=t,a=n,o.attachEvent("onpropertychange",T)):e==="blur"&&w()}l(O,"Ie");function B(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return c(a)}l(B,"Je");function ve(e,t){if(e==="click")return c(t)}l(ve,"Ke");function oe(e,t){if(e==="input"||e==="change")return c(t)}l(oe,"Le");var se={eventTypes:wi,_isInputEventSupported:v,extractEvents:function(e,t,n,r){var i=t?Zt(t):window,u=i.nodeName&&i.nodeName.toLowerCase();if(u==="select"||u==="input"&&i.type==="file")var d=m;else if(yi(i))if(v)d=oe;else{d=B;var p=O}else(u=i.nodeName)&&u.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(d=ve);if(d&&(d=d(e,t)))return Ci(d,n,r);p&&p(e,i,t),e==="blur"&&(e=i._wrapperState)&&e.controlled&&i.type==="number"&&Br(i,"number",i.value)}},He=ft.extend({view:null,detail:null}),Ue={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $e(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ue[e])?!!t[e]:!1}l($e,"Pe");function Le(){return $e}l(Le,"Qe");var he=0,je=0,We=!1,Lt=!1,nt=He.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Le,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=he;return he=e.screenX,We?e.type==="mousemove"?e.screenX-t:0:(We=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=je;return je=e.screenY,Lt?e.type==="mousemove"?e.screenY-t:0:(Lt=!0,0)}}),En=nt.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ht={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Tr={eventTypes:ht,extractEvents:function(e,t,n,r,i){var u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout";if(u&&(i&32)==0&&(n.relatedTarget||n.fromElement)||!d&&!u)return null;if(u=r.window===r?r:(u=r.ownerDocument)?u.defaultView||u.parentWindow:window,d){if(d=t,t=(t=n.relatedTarget||n.toElement)?qn(t):null,t!==null){var p=Bt(t);(t!==p||t.tag!==5&&t.tag!==6)&&(t=null)}}else d=null;if(d===t)return null;if(e==="mouseout"||e==="mouseover")var k=nt,b=ht.mouseLeave,G=ht.mouseEnter,le="mouse";else(e==="pointerout"||e==="pointerover")&&(k=En,b=ht.pointerLeave,G=ht.pointerEnter,le="pointer");if(e=d==null?u:Zt(d),u=t==null?u:Zt(t),b=k.getPooled(b,d,n,r),b.type=le+"leave",b.target=e,b.relatedTarget=u,n=k.getPooled(G,t,n,r),n.type=le+"enter",n.target=u,n.relatedTarget=e,r=d,le=t,r&&le)e:{for(k=r,G=le,d=0,e=k;e;e=It(e))d++;for(e=0,t=G;t;t=It(t))e++;for(;0<d-e;)k=It(k),d--;for(;0<e-d;)G=It(G),e--;for(;d--;){if(k===G||k===G.alternate)break e;k=It(k),G=It(G)}k=null}else k=null;for(G=k,k=[];r&&r!==G&&(d=r.alternate,!(d!==null&&d===G));)k.push(r),r=It(r);for(r=[];le&&le!==G&&(d=le.alternate,!(d!==null&&d===G));)r.push(le),le=It(le);for(le=0;le<k.length;le++)Qn(k[le],"bubbled",b);for(le=r.length;0<le--;)Qn(r[le],"captured",n);return(i&64)==0?[b]:[b,n]}};function mt(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}l(mt,"Ze");var Ve=typeof Object.is=="function"?Object.is:mt,st=Object.prototype.hasOwnProperty;function Ft(e,t){if(Ve(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!st.call(t,n[r])||!Ve(e[n[r]],t[n[r]]))return!1;return!0}l(Ft,"bf");var Ul=ue&&"documentMode"in document&&11>=document.documentMode,Ws={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Sr=null,Wl=null,Co=null,ql=!1;function qs(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return ql||Sr==null||Sr!==ni(n)?null:(n=Sr,"selectionStart"in n&&io(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Co&&Ft(Co,n)?null:(Co=n,e=ft.getPooled(Ws.select,Wl,e,t),e.type="select",e.target=Sr,ln(e),e))}l(qs,"jf");var pu={eventTypes:Ws,extractEvents:function(e,t,n,r,i,u){if(i=u||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(u=!i)){e:{i=mr(i),u=$.onSelect;for(var d=0;d<u.length;d++)if(!i.has(u[d])){i=!1;break e}i=!0}u=!i}if(u)return null;switch(i=t?Zt(t):window,e){case"focus":(yi(i)||i.contentEditable==="true")&&(Sr=i,Wl=t,Co=null);break;case"blur":Co=Wl=Sr=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":return ql=!1,qs(n,r);case"selectionchange":if(Ul)break;case"keydown":case"keyup":return qs(n,r)}return null}},hu=ft.extend({animationName:null,elapsedTime:null,pseudoElement:null}),vu=ft.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gu=He.extend({relatedTarget:null});function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}l(xi,"of");var yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cu=He.extend({key:function(e){if(e.key){var t=yu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wu[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Le,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xu=nt.extend({dataTransfer:null}),Eu=He.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Le}),ku=ft.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),bu=nt.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),_u={eventTypes:Yo,extractEvents:function(e,t,n,r){var i=Xo.get(e);if(!i)return null;switch(e){case"keypress":if(xi(n)===0)return null;case"keydown":case"keyup":e=Cu;break;case"blur":case"focus":e=gu;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=nt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=xu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=Eu;break;case fr:case qr:case Zr:e=hu;break;case Zo:e=ku;break;case"scroll":e=He;break;case"wheel":e=bu;break;case"copy":case"cut":case"paste":e=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=En;break;default:e=ft}return t=e.getPooled(i,t,n,r),ln(t),t}};if(E)throw Error(h(101));E=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),q();var Lu=Zn;j=po,K=Lu,de=Zt,Z({SimpleEventPlugin:_u,EnterLeaveEventPlugin:Tr,ChangeEventPlugin:se,SelectEventPlugin:pu,BeforeInputEventPlugin:jl});var Zl=[],Mr=-1;function qe(e){0>Mr||(e.current=Zl[Mr],Zl[Mr]=null,Mr--)}l(qe,"H");function Xe(e,t){Mr++,Zl[Mr]=e.current,e.current=t}l(Xe,"I");var kn={},at={current:kn},vt={current:!1},Yn=kn;function Nr(e,t){var n=e.type.contextTypes;if(!n)return kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},u;for(u in n)i[u]=t[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}l(Nr,"Cf");function gt(e){return e=e.childContextTypes,e!=null}l(gt,"L");function Ei(){qe(vt),qe(at)}l(Ei,"Df");function Zs(e,t,n){if(at.current!==kn)throw Error(h(168));Xe(at,t),Xe(vt,n)}l(Zs,"Ef");function Qs(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(h(108,$t(t)||"Unknown",i));return I({},n,{},r)}l(Qs,"Ff");function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Yn=at.current,Xe(at,e),Xe(vt,vt.current),!0}l(ki,"Gf");function Ks(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Qs(e,t,Yn),r.__reactInternalMemoizedMergedChildContext=e,qe(vt),qe(at),Xe(at,e)):qe(vt),Xe(vt,n)}l(Ks,"Hf");var Tu=y.unstable_runWithPriority,Ql=y.unstable_scheduleCallback,Ys=y.unstable_cancelCallback,Xs=y.unstable_requestPaint,Kl=y.unstable_now,Su=y.unstable_getCurrentPriorityLevel,bi=y.unstable_ImmediatePriority,Gs=y.unstable_UserBlockingPriority,Js=y.unstable_NormalPriority,ea=y.unstable_LowPriority,ta=y.unstable_IdlePriority,na={},Mu=y.unstable_shouldYield,Nu=Xs!==void 0?Xs:function(){},sn=null,_i=null,Yl=!1,ra=Kl(),Tt=1e4>ra?Kl:function(){return Kl()-ra};function Li(){switch(Su()){case bi:return 99;case Gs:return 98;case Js:return 97;case ea:return 96;case ta:return 95;default:throw Error(h(332))}}l(Li,"ag");function oa(e){switch(e){case 99:return bi;case 98:return Gs;case 97:return Js;case 96:return ea;case 95:return ta;default:throw Error(h(332))}}l(oa,"bg");function bn(e,t){return e=oa(e),Tu(e,t)}l(bn,"cg");function ia(e,t,n){return e=oa(e),Ql(e,t,n)}l(ia,"dg");function la(e){return sn===null?(sn=[e],_i=Ql(bi,sa)):sn.push(e),na}l(la,"eg");function Qt(){if(_i!==null){var e=_i;_i=null,Ys(e)}sa()}l(Qt,"gg");function sa(){if(!Yl&&sn!==null){Yl=!0;var e=0;try{var t=sn;bn(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),sn=null}catch(n){throw sn!==null&&(sn=sn.slice(e+1)),Ql(bi,Qt),n}finally{Yl=!1}}}l(sa,"fg");function Ti(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}l(Ti,"hg");function zt(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}l(zt,"ig");var Si={current:null},Mi=null,Pr=null,Ni=null;function Xl(){Ni=Pr=Mi=null}l(Xl,"ng");function Gl(e){var t=Si.current;qe(Si),e.type._context._currentValue=t}l(Gl,"og");function aa(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}l(aa,"pg");function Rr(e,t){Mi=e,Ni=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(Yt=!0),e.firstContext=null)}l(Rr,"qg");function St(e,t){if(Ni!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Ni=e,t=1073741823),t={context:e,observedBits:t,next:null},Pr===null){if(Mi===null)throw Error(h(308));Pr=t,Mi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Pr=Pr.next=t;return e._currentValue}l(St,"sg");var _n=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}l(Jl,"ug");function es(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}l(es,"vg");function Ln(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}l(Ln,"wg");function Tn(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}l(Tn,"xg");function ua(e,t){var n=e.alternate;n!==null&&es(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}l(ua,"yg");function xo(e,t,n,r){var i=e.updateQueue;_n=!1;var u=i.baseQueue,d=i.shared.pending;if(d!==null){if(u!==null){var p=u.next;u.next=d.next,d.next=p}u=d,i.shared.pending=null,p=e.alternate,p!==null&&(p=p.updateQueue,p!==null&&(p.baseQueue=d))}if(u!==null){p=u.next;var k=i.baseState,b=0,G=null,le=null,Ne=null;if(p!==null){var Fe=p;do{if(d=Fe.expirationTime,d<r){var Nt={expirationTime:Fe.expirationTime,suspenseConfig:Fe.suspenseConfig,tag:Fe.tag,payload:Fe.payload,callback:Fe.callback,next:null};Ne===null?(le=Ne=Nt,G=k):Ne=Ne.next=Nt,d>b&&(b=d)}else{Ne!==null&&(Ne=Ne.next={expirationTime:1073741823,suspenseConfig:Fe.suspenseConfig,tag:Fe.tag,payload:Fe.payload,callback:Fe.callback,next:null}),iu(d,Fe.suspenseConfig);e:{var rt=e,x=Fe;switch(d=t,Nt=n,x.tag){case 1:if(rt=x.payload,typeof rt=="function"){k=rt.call(Nt,k,d);break e}k=rt;break e;case 3:rt.effectTag=rt.effectTag&-4097|64;case 0:if(rt=x.payload,d=typeof rt=="function"?rt.call(Nt,k,d):rt,d==null)break e;k=I({},k,d);break e;case 2:_n=!0}}Fe.callback!==null&&(e.effectTag|=32,d=i.effects,d===null?i.effects=[Fe]:d.push(Fe))}if(Fe=Fe.next,Fe===null||Fe===p){if(d=i.shared.pending,d===null)break;Fe=u.next=d.next,d.next=p,i.baseQueue=u=d,i.shared.pending=null}}while(1)}Ne===null?G=k:Ne.next=le,i.baseState=G,i.baseQueue=Ne,rl(b),e.expirationTime=b,e.memoizedState=k}}l(xo,"zg");function ca(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=i,i=n,typeof r!="function")throw Error(h(191,r));r.call(i)}}}l(ca,"Cg");var Eo=dt.ReactCurrentBatchConfig,da=new ee.Component().refs;function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:I({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}l(Pi,"Fg");var Ri={isMounted:function(e){return(e=e._reactInternalFiber)?Bt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Gt(),i=Eo.suspense;r=nr(r,e,i),i=Ln(r,i),i.payload=t,n!=null&&(i.callback=n),Tn(e,i),Pn(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Gt(),i=Eo.suspense;r=nr(r,e,i),i=Ln(r,i),i.tag=1,i.payload=t,n!=null&&(i.callback=n),Tn(e,i),Pn(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Gt(),r=Eo.suspense;n=nr(n,e,r),r=Ln(n,r),r.tag=2,t!=null&&(r.callback=t),Tn(e,r),Pn(e,n)}};function fa(e,t,n,r,i,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,d):t.prototype&&t.prototype.isPureReactComponent?!Ft(n,r)||!Ft(i,u):!0}l(fa,"Kg");function ma(e,t,n){var r=!1,i=kn,u=t.contextType;return typeof u=="object"&&u!==null?u=St(u):(i=gt(t)?Yn:at.current,r=t.contextTypes,u=(r=r!=null)?Nr(e,i):kn),t=new t(n,u),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=u),t}l(ma,"Lg");function pa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}l(pa,"Mg");function ts(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=da,Jl(e);var u=t.contextType;typeof u=="object"&&u!==null?i.context=St(u):(u=gt(t)?Yn:at.current,i.context=Nr(e,u)),xo(e,n,i,r),i.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Pi(e,t,u,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ri.enqueueReplaceState(i,i.state,null),xo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.effectTag|=4)}l(ts,"Ng");var Oi=Array.isArray;function ko(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=l(function(u){var d=r.refs;d===da&&(d=r.refs={}),u===null?delete d[i]:d[i]=u},"b"),t._stringRef=i,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}l(ko,"Pg");function Di(e,t){if(e.type!=="textarea")throw Error(h(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}l(Di,"Qg");function ha(e){function t(x,C){if(e){var L=x.lastEffect;L!==null?(L.nextEffect=C,x.lastEffect=C):x.firstEffect=x.lastEffect=C,C.nextEffect=null,C.effectTag=8}}l(t,"b");function n(x,C){if(!e)return null;for(;C!==null;)t(x,C),C=C.sibling;return null}l(n,"c");function r(x,C){for(x=new Map;C!==null;)C.key!==null?x.set(C.key,C):x.set(C.index,C),C=C.sibling;return x}l(r,"d");function i(x,C){return x=lr(x,C),x.index=0,x.sibling=null,x}l(i,"e");function u(x,C,L){return x.index=L,e?(L=x.alternate,L!==null?(L=L.index,L<C?(x.effectTag=2,C):L):(x.effectTag=2,C)):C}l(u,"f");function d(x){return e&&x.alternate===null&&(x.effectTag=2),x}l(d,"g");function p(x,C,L,U){return C===null||C.tag!==6?(C=As(L,x.mode,U),C.return=x,C):(C=i(C,L),C.return=x,C)}l(p,"h");function k(x,C,L,U){return C!==null&&C.elementType===L.type?(U=i(C,L.props),U.ref=ko(x,C,L),U.return=x,U):(U=ol(L.type,L.key,L.props,null,x.mode,U),U.ref=ko(x,C,L),U.return=x,U)}l(k,"k");function b(x,C,L,U){return C===null||C.tag!==4||C.stateNode.containerInfo!==L.containerInfo||C.stateNode.implementation!==L.implementation?(C=Hs(L,x.mode,U),C.return=x,C):(C=i(C,L.children||[]),C.return=x,C)}l(b,"l");function G(x,C,L,U,Q){return C===null||C.tag!==7?(C=Rn(L,x.mode,U,Q),C.return=x,C):(C=i(C,L),C.return=x,C)}l(G,"m");function le(x,C,L){if(typeof C=="string"||typeof C=="number")return C=As(""+C,x.mode,L),C.return=x,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ar:return L=ol(C.type,C.key,C.props,null,x.mode,L),L.ref=ko(x,null,C),L.return=x,L;case dn:return C=Hs(C,x.mode,L),C.return=x,C}if(Oi(C)||cr(C))return C=Rn(C,x.mode,L,null),C.return=x,C;Di(x,C)}return null}l(le,"p");function Ne(x,C,L,U){var Q=C!==null?C.key:null;if(typeof L=="string"||typeof L=="number")return Q!==null?null:p(x,C,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ar:return L.key===Q?L.type===en?G(x,C,L.props.children,U,Q):k(x,C,L,U):null;case dn:return L.key===Q?b(x,C,L,U):null}if(Oi(L)||cr(L))return Q!==null?null:G(x,C,L,U,null);Di(x,L)}return null}l(Ne,"x");function Fe(x,C,L,U,Q){if(typeof U=="string"||typeof U=="number")return x=x.get(L)||null,p(C,x,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case ar:return x=x.get(U.key===null?L:U.key)||null,U.type===en?G(C,x,U.props.children,Q,U.key):k(C,x,U,Q);case dn:return x=x.get(U.key===null?L:U.key)||null,b(C,x,U,Q)}if(Oi(U)||cr(U))return x=x.get(L)||null,G(C,x,U,Q,null);Di(C,U)}return null}l(Fe,"z");function Nt(x,C,L,U){for(var Q=null,ae=null,ge=C,Oe=C=0,Qe=null;ge!==null&&Oe<L.length;Oe++){ge.index>Oe?(Qe=ge,ge=null):Qe=ge.sibling;var _e=Ne(x,ge,L[Oe],U);if(_e===null){ge===null&&(ge=Qe);break}e&&ge&&_e.alternate===null&&t(x,ge),C=u(_e,C,Oe),ae===null?Q=_e:ae.sibling=_e,ae=_e,ge=Qe}if(Oe===L.length)return n(x,ge),Q;if(ge===null){for(;Oe<L.length;Oe++)ge=le(x,L[Oe],U),ge!==null&&(C=u(ge,C,Oe),ae===null?Q=ge:ae.sibling=ge,ae=ge);return Q}for(ge=r(x,ge);Oe<L.length;Oe++)Qe=Fe(ge,x,Oe,L[Oe],U),Qe!==null&&(e&&Qe.alternate!==null&&ge.delete(Qe.key===null?Oe:Qe.key),C=u(Qe,C,Oe),ae===null?Q=Qe:ae.sibling=Qe,ae=Qe);return e&&ge.forEach(function(On){return t(x,On)}),Q}l(Nt,"ca");function rt(x,C,L,U){var Q=cr(L);if(typeof Q!="function")throw Error(h(150));if(L=Q.call(L),L==null)throw Error(h(151));for(var ae=Q=null,ge=C,Oe=C=0,Qe=null,_e=L.next();ge!==null&&!_e.done;Oe++,_e=L.next()){ge.index>Oe?(Qe=ge,ge=null):Qe=ge.sibling;var On=Ne(x,ge,_e.value,U);if(On===null){ge===null&&(ge=Qe);break}e&&ge&&On.alternate===null&&t(x,ge),C=u(On,C,Oe),ae===null?Q=On:ae.sibling=On,ae=On,ge=Qe}if(_e.done)return n(x,ge),Q;if(ge===null){for(;!_e.done;Oe++,_e=L.next())_e=le(x,_e.value,U),_e!==null&&(C=u(_e,C,Oe),ae===null?Q=_e:ae.sibling=_e,ae=_e);return Q}for(ge=r(x,ge);!_e.done;Oe++,_e=L.next())_e=Fe(ge,x,Oe,_e.value,U),_e!==null&&(e&&_e.alternate!==null&&ge.delete(_e.key===null?Oe:_e.key),C=u(_e,C,Oe),ae===null?Q=_e:ae.sibling=_e,ae=_e);return e&&ge.forEach(function(oc){return t(x,oc)}),Q}return l(rt,"D"),function(x,C,L,U){var Q=typeof L=="object"&&L!==null&&L.type===en&&L.key===null;Q&&(L=L.props.children);var ae=typeof L=="object"&&L!==null;if(ae)switch(L.$$typeof){case ar:e:{for(ae=L.key,Q=C;Q!==null;){if(Q.key===ae){switch(Q.tag){case 7:if(L.type===en){n(x,Q.sibling),C=i(Q,L.props.children),C.return=x,x=C;break e}break;default:if(Q.elementType===L.type){n(x,Q.sibling),C=i(Q,L.props),C.ref=ko(x,Q,L),C.return=x,x=C;break e}}n(x,Q);break}else t(x,Q);Q=Q.sibling}L.type===en?(C=Rn(L.props.children,x.mode,U,L.key),C.return=x,x=C):(U=ol(L.type,L.key,L.props,null,x.mode,U),U.ref=ko(x,C,L),U.return=x,x=U)}return d(x);case dn:e:{for(Q=L.key;C!==null;){if(C.key===Q)if(C.tag===4&&C.stateNode.containerInfo===L.containerInfo&&C.stateNode.implementation===L.implementation){n(x,C.sibling),C=i(C,L.children||[]),C.return=x,x=C;break e}else{n(x,C);break}else t(x,C);C=C.sibling}C=Hs(L,x.mode,U),C.return=x,x=C}return d(x)}if(typeof L=="string"||typeof L=="number")return L=""+L,C!==null&&C.tag===6?(n(x,C.sibling),C=i(C,L),C.return=x,x=C):(n(x,C),C=As(L,x.mode,U),C.return=x,x=C),d(x);if(Oi(L))return Nt(x,C,L,U);if(cr(L))return rt(x,C,L,U);if(ae&&Di(x,L),typeof L=="undefined"&&!Q)switch(x.tag){case 1:case 0:throw x=x.type,Error(h(152,x.displayName||x.name||"Component"))}return n(x,C)}}l(ha,"Rg");var Or=ha(!0),ns=ha(!1),bo={},Kt={current:bo},_o={current:bo},Lo={current:bo};function Xn(e){if(e===bo)throw Error(h(174));return e}l(Xn,"ch");function rs(e,t){switch(Xe(Lo,t),Xe(_o,e),Xe(Kt,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wo(t,e)}qe(Kt),Xe(Kt,t)}l(rs,"dh");function Dr(){qe(Kt),qe(_o),qe(Lo)}l(Dr,"eh");function va(e){Xn(Lo.current);var t=Xn(Kt.current),n=Wo(t,e.type);t!==n&&(Xe(_o,e),Xe(Kt,n))}l(va,"fh");function os(e){_o.current===e&&(qe(Kt),qe(_o))}l(os,"gh");var Ye={current:0};function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===lo||n.data===so))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.effectTag&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}l(Ii,"hh");function is(e,t){return{responder:e,props:t}}l(is,"ih");var Ai=dt.ReactCurrentDispatcher,Mt=dt.ReactCurrentBatchConfig,Sn=0,Ge=null,ut=null,ct=null,Hi=!1;function Ct(){throw Error(h(321))}l(Ct,"Q");function ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ve(e[n],t[n]))return!1;return!0}l(ls,"nh");function ss(e,t,n,r,i,u){if(Sn=u,Ge=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Ai.current=e===null||e.memoizedState===null?Pu:Ru,e=n(r,i),t.expirationTime===Sn){u=0;do{if(t.expirationTime=0,!(25>u))throw Error(h(301));u+=1,ct=ut=null,t.updateQueue=null,Ai.current=Ou,e=n(r,i)}while(t.expirationTime===Sn)}if(Ai.current=ji,t=ut!==null&&ut.next!==null,Sn=0,ct=ut=Ge=null,Hi=!1,t)throw Error(h(300));return e}l(ss,"oh");function Ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ge.memoizedState=ct=e:ct=ct.next=e,ct}l(Ir,"th");function Ar(){if(ut===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=ct===null?Ge.memoizedState:ct.next;if(t!==null)ct=t,ut=e;else{if(e===null)throw Error(h(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ct===null?Ge.memoizedState=ct=e:ct=ct.next=e}return ct}l(Ar,"uh");function Gn(e,t){return typeof t=="function"?t(e):t}l(Gn,"vh");function Fi(e){var t=Ar(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=ut,i=r.baseQueue,u=n.pending;if(u!==null){if(i!==null){var d=i.next;i.next=u.next,u.next=d}r.baseQueue=i=u,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var p=d=u=null,k=i;do{var b=k.expirationTime;if(b<Sn){var G={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};p===null?(d=p=G,u=r):p=p.next=G,b>Ge.expirationTime&&(Ge.expirationTime=b,rl(b))}else p!==null&&(p=p.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),iu(b,k.suspenseConfig),r=k.eagerReducer===e?k.eagerState:e(r,k.action);k=k.next}while(k!==null&&k!==i);p===null?u=r:p.next=d,Ve(r,t.memoizedState)||(Yt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=p,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}l(Fi,"wh");function zi(e){var t=Ar(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,u=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do u=e(u,d.action),d=d.next;while(d!==i);Ve(u,t.memoizedState)||(Yt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}l(zi,"xh");function as(e){var t=Ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},e=e.dispatch=ba.bind(null,Ge,e),[t.memoizedState,e]}l(as,"yh");function us(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}l(us,"Ah");function ga(){return Ar().memoizedState}l(ga,"Bh");function cs(e,t,n,r){var i=Ir();Ge.effectTag|=e,i.memoizedState=us(1|t,n,void 0,r===void 0?null:r)}l(cs,"Ch");function ds(e,t,n,r){var i=Ar();r=r===void 0?null:r;var u=void 0;if(ut!==null){var d=ut.memoizedState;if(u=d.destroy,r!==null&&ls(r,d.deps)){us(t,n,u,r);return}}Ge.effectTag|=e,i.memoizedState=us(1|t,n,u,r)}l(ds,"Dh");function ya(e,t){return cs(516,4,e,t)}l(ya,"Eh");function Vi(e,t){return ds(516,4,e,t)}l(Vi,"Fh");function wa(e,t){return ds(4,2,e,t)}l(wa,"Gh");function Ca(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}l(Ca,"Hh");function xa(e,t,n){return n=n!=null?n.concat([e]):null,ds(4,2,Ca.bind(null,t,e),n)}l(xa,"Ih");function fs(){}l(fs,"Jh");function Ea(e,t){return Ir().memoizedState=[e,t===void 0?null:t],e}l(Ea,"Kh");function $i(e,t){var n=Ar();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}l($i,"Lh");function ka(e,t){var n=Ar();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}l(ka,"Mh");function ms(e,t,n){var r=Li();bn(98>r?98:r,function(){e(!0)}),bn(97<r?97:r,function(){var i=Mt.suspense;Mt.suspense=t===void 0?null:t;try{e(!1),n()}finally{Mt.suspense=i}})}l(ms,"Nh");function ba(e,t,n){var r=Gt(),i=Eo.suspense;r=nr(r,e,i),i={expirationTime:r,suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var u=t.pending;if(u===null?i.next=i:(i.next=u.next,u.next=i),t.pending=i,u=e.alternate,e===Ge||u!==null&&u===Ge)Hi=!0,i.expirationTime=Sn,Ge.expirationTime=Sn;else{if(e.expirationTime===0&&(u===null||u.expirationTime===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,p=u(d,n);if(i.eagerReducer=u,i.eagerState=p,Ve(p,d))return}catch(k){}finally{}Pn(e,r)}}l(ba,"zh");var ji={readContext:St,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useResponder:Ct,useDeferredValue:Ct,useTransition:Ct},Pu={readContext:St,useCallback:Ea,useContext:St,useEffect:ya,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cs(4,2,Ca.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4,2,e,t)},useMemo:function(e,t){var n=Ir();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ir();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=ba.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Ir();return e={current:e},t.memoizedState=e},useState:as,useDebugValue:fs,useResponder:is,useDeferredValue:function(e,t){var n=as(e),r=n[0],i=n[1];return ya(function(){var u=Mt.suspense;Mt.suspense=t===void 0?null:t;try{i(e)}finally{Mt.suspense=u}},[e,t]),r},useTransition:function(e){var t=as(!1),n=t[0];return t=t[1],[Ea(ms.bind(null,t,e),[t,e]),n]}},Ru={readContext:St,useCallback:$i,useContext:St,useEffect:Vi,useImperativeHandle:xa,useLayoutEffect:wa,useMemo:ka,useReducer:Fi,useRef:ga,useState:function(){return Fi(Gn)},useDebugValue:fs,useResponder:is,useDeferredValue:function(e,t){var n=Fi(Gn),r=n[0],i=n[1];return Vi(function(){var u=Mt.suspense;Mt.suspense=t===void 0?null:t;try{i(e)}finally{Mt.suspense=u}},[e,t]),r},useTransition:function(e){var t=Fi(Gn),n=t[0];return t=t[1],[$i(ms.bind(null,t,e),[t,e]),n]}},Ou={readContext:St,useCallback:$i,useContext:St,useEffect:Vi,useImperativeHandle:xa,useLayoutEffect:wa,useMemo:ka,useReducer:zi,useRef:ga,useState:function(){return zi(Gn)},useDebugValue:fs,useResponder:is,useDeferredValue:function(e,t){var n=zi(Gn),r=n[0],i=n[1];return Vi(function(){var u=Mt.suspense;Mt.suspense=t===void 0?null:t;try{i(e)}finally{Mt.suspense=u}},[e,t]),r},useTransition:function(e){var t=zi(Gn),n=t[0];return t=t[1],[$i(ms.bind(null,t,e),[t,e]),n]}},an=null,Mn=null,Jn=!1;function _a(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}l(_a,"Rh");function La(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}l(La,"Th");function ps(e){if(Jn){var t=Mn;if(t){var n=t;if(!La(e,t)){if(t=on(n.nextSibling),!t||!La(e,t)){e.effectTag=e.effectTag&-1025|2,Jn=!1,an=e;return}_a(an,n)}an=e,Mn=on(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,Jn=!1,an=e}}l(ps,"Uh");function Ta(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}l(Ta,"Vh");function Bi(e){if(e!==an)return!1;if(!Jn)return Ta(e),Jn=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!br(t,e.memoizedProps))for(t=Mn;t;)_a(e,t),t=on(t.nextSibling);if(Ta(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===si){if(t===0){Mn=on(e.nextSibling);break e}t--}else n!==Dl&&n!==so&&n!==lo||t++}e=e.nextSibling}Mn=null}}else Mn=an?on(e.stateNode.nextSibling):null;return!0}l(Bi,"Wh");function hs(){Mn=an=null,Jn=!1}l(hs,"Xh");var Du=dt.ReactCurrentOwner,Yt=!1;function xt(e,t,n,r){t.child=e===null?ns(t,null,n,r):Or(t,e.child,n,r)}l(xt,"R");function Sa(e,t,n,r,i){n=n.render;var u=t.ref;return Rr(t,i),r=ss(e,t,n,r,u,i),e!==null&&!Yt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),un(e,t,i)):(t.effectTag|=1,xt(e,t,r,i),t.child)}l(Sa,"Zh");function Ma(e,t,n,r,i,u){if(e===null){var d=n.type;return typeof d=="function"&&!Is(d)&&d.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=d,Na(e,t,d,r,i,u)):(e=ol(n.type,null,r,null,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}return d=e.child,i<u&&(i=d.memoizedProps,n=n.compare,n=n!==null?n:Ft,n(i,r)&&e.ref===t.ref)?un(e,t,u):(t.effectTag|=1,e=lr(d,r),e.ref=t.ref,e.return=t,t.child=e)}l(Ma,"ai");function Na(e,t,n,r,i,u){return e!==null&&Ft(e.memoizedProps,r)&&e.ref===t.ref&&(Yt=!1,i<u)?(t.expirationTime=e.expirationTime,un(e,t,u)):vs(e,t,n,r,u)}l(Na,"ci");function Pa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}l(Pa,"ei");function vs(e,t,n,r,i){var u=gt(n)?Yn:at.current;return u=Nr(t,u),Rr(t,i),n=ss(e,t,n,r,u,i),e!==null&&!Yt?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),un(e,t,i)):(t.effectTag|=1,xt(e,t,n,i),t.child)}l(vs,"di");function Ra(e,t,n,r,i){if(gt(n)){var u=!0;ki(t)}else u=!1;if(Rr(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),ma(t,n,r),ts(t,n,r,i),r=!0;else if(e===null){var d=t.stateNode,p=t.memoizedProps;d.props=p;var k=d.context,b=n.contextType;typeof b=="object"&&b!==null?b=St(b):(b=gt(n)?Yn:at.current,b=Nr(t,b));var G=n.getDerivedStateFromProps,le=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function";le||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==r||k!==b)&&pa(t,d,r,b),_n=!1;var Ne=t.memoizedState;d.state=Ne,xo(t,r,d,i),k=t.memoizedState,p!==r||Ne!==k||vt.current||_n?(typeof G=="function"&&(Pi(t,n,G,r),k=t.memoizedState),(p=_n||fa(t,n,p,r,Ne,k,b))?(le||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.effectTag|=4)):(typeof d.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=k),d.props=r,d.state=k,d.context=b,r=p):(typeof d.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else d=t.stateNode,es(e,t),p=t.memoizedProps,d.props=t.type===t.elementType?p:zt(t.type,p),k=d.context,b=n.contextType,typeof b=="object"&&b!==null?b=St(b):(b=gt(n)?Yn:at.current,b=Nr(t,b)),G=n.getDerivedStateFromProps,(le=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==r||k!==b)&&pa(t,d,r,b),_n=!1,k=t.memoizedState,d.state=k,xo(t,r,d,i),Ne=t.memoizedState,p!==r||k!==Ne||vt.current||_n?(typeof G=="function"&&(Pi(t,n,G,r),Ne=t.memoizedState),(G=_n||fa(t,n,p,r,k,Ne,b))?(le||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,Ne,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,Ne,b)),typeof d.componentDidUpdate=="function"&&(t.effectTag|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=Ne),d.props=r,d.state=Ne,d.context=b,r=G):(typeof d.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.effectTag|=256),r=!1);return gs(e,t,n,r,u,i)}l(Ra,"fi");function gs(e,t,n,r,i,u){Pa(e,t);var d=(t.effectTag&64)!=0;if(!r&&!d)return i&&Ks(t,n,!1),un(e,t,u);r=t.stateNode,Du.current=t;var p=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&d?(t.child=Or(t,e.child,null,u),t.child=Or(t,null,p,u)):xt(e,t,p,u),t.memoizedState=r.state,i&&Ks(t,n,!0),t.child}l(gs,"gi");function Oa(e){var t=e.stateNode;t.pendingContext?Zs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zs(e,t.context,!1),rs(e,t.containerInfo)}l(Oa,"hi");var ys={dehydrated:null,retryTime:0};function Da(e,t,n){var r=t.mode,i=t.pendingProps,u=Ye.current,d=!1,p;if((p=(t.effectTag&64)!=0)||(p=(u&2)!=0&&(e===null||e.memoizedState!==null)),p?(d=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(u|=1),Xe(Ye,u&1),e===null){if(i.fallback!==void 0&&ps(t),d){if(d=i.fallback,i=Rn(null,r,0,null),i.return=t,(t.mode&2)==0)for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=Rn(d,r,n,null),n.return=t,i.sibling=n,t.memoizedState=ys,t.child=i,n}return r=i.children,t.memoizedState=null,t.child=ns(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,d){if(i=i.fallback,n=lr(e,e.pendingProps),n.return=t,(t.mode&2)==0&&(d=t.memoizedState!==null?t.child.child:t.child,d!==e.child))for(n.child=d;d!==null;)d.return=n,d=d.sibling;return r=lr(r,i),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=ys,t.child=n,r}return n=Or(t,e.child,i.children,n),t.memoizedState=null,t.child=n}if(e=e.child,d){if(d=i.fallback,i=Rn(null,r,0,null),i.return=t,i.child=e,e!==null&&(e.return=i),(t.mode&2)==0)for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=Rn(d,r,n,null),n.return=t,i.sibling=n,n.effectTag|=2,i.childExpirationTime=0,t.memoizedState=ys,t.child=i,n}return t.memoizedState=null,t.child=Or(t,e,i.children,n)}l(Da,"ji");function Ia(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),aa(e.return,t)}l(Ia,"ki");function ws(e,t,n,r,i,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=r,d.tail=n,d.tailExpiration=0,d.tailMode=i,d.lastEffect=u)}l(ws,"li");function Aa(e,t,n){var r=t.pendingProps,i=r.revealOrder,u=r.tail;if(xt(e,t,r.children,n),r=Ye.current,(r&2)!=0)r=r&1|2,t.effectTag|=64;else{if(e!==null&&(e.effectTag&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ia(e,n);else if(e.tag===19)Ia(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Xe(Ye,r),(t.mode&2)==0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ws(t,!1,i,n,u,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ws(t,!0,n,null,u,t.lastEffect);break;case"together":ws(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}l(Aa,"mi");function un(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&rl(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=lr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=lr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}l(un,"$h");var Ha,Cs,Fa,za;Ha=l(function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},"ni"),Cs=l(function(){},"oi"),Fa=l(function(e,t,n,r,i){var u=e.memoizedProps;if(u!==r){var d=t.stateNode;switch(Xn(Kt.current),e=null,n){case"input":u=mn(d,u),r=mn(d,r),e=[];break;case"option":u=jo(d,u),r=jo(d,r),e=[];break;case"select":u=I({},u,{value:void 0}),r=I({},r,{value:void 0}),e=[];break;case"textarea":u=Ur(d,u),r=Ur(d,r),e=[];break;default:typeof u.onClick!="function"&&typeof r.onClick=="function"&&(d.onclick=kr)}ro(n,r);var p,k;n=null;for(p in u)if(!r.hasOwnProperty(p)&&u.hasOwnProperty(p)&&u[p]!=null)if(p==="style")for(k in d=u[p],d)d.hasOwnProperty(k)&&(n||(n={}),n[k]="");else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(A.hasOwnProperty(p)?e||(e=[]):(e=e||[]).push(p,null));for(p in r){var b=r[p];if(d=u!=null?u[p]:void 0,r.hasOwnProperty(p)&&b!==d&&(b!=null||d!=null))if(p==="style")if(d){for(k in d)!d.hasOwnProperty(k)||b&&b.hasOwnProperty(k)||(n||(n={}),n[k]="");for(k in b)b.hasOwnProperty(k)&&d[k]!==b[k]&&(n||(n={}),n[k]=b[k])}else n||(e||(e=[]),e.push(p,n)),n=b;else p==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,d=d?d.__html:void 0,b!=null&&d!==b&&(e=e||[]).push(p,b)):p==="children"?d===b||typeof b!="string"&&typeof b!="number"||(e=e||[]).push(p,""+b):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(A.hasOwnProperty(p)?(b!=null&&Dt(i,p),e||d===b||(e=[])):(e=e||[]).push(p,b))}n&&(e=e||[]).push("style",n),i=e,(t.updateQueue=i)&&(t.effectTag|=4)}},"pi"),za=l(function(e,t,n,r){n!==r&&(t.effectTag|=4)},"qi");function Ui(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}l(Ui,"ri");function Iu(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return gt(t.type)&&Ei(),null;case 3:return Dr(),qe(vt),qe(at),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Bi(t)||(t.effectTag|=4),Cs(t),null;case 5:os(t),n=Xn(Lo.current);var i=t.type;if(e!==null&&t.stateNode!=null)Fa(e,t,i,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(h(166));return null}if(e=Xn(Kt.current),Bi(t)){r=t.stateNode,i=t.type;var u=t.memoizedProps;switch(r[qt]=t,r[mo]=u,i){case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(e=0;e<hn.length;e++)ke(hn[e],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"form":ke("reset",r),ke("submit",r);break;case"details":ke("toggle",r);break;case"input":zo(r,u),ke("invalid",r),Dt(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!u.multiple},ke("invalid",r),Dt(n,"onChange");break;case"textarea":Bo(r,u),ke("invalid",r),Dt(n,"onChange")}ro(i,u),e=null;for(var d in u)if(u.hasOwnProperty(d)){var p=u[d];d==="children"?typeof p=="string"?r.textContent!==p&&(e=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(e=["children",""+p]):A.hasOwnProperty(d)&&p!=null&&Dt(n,d)}switch(i){case"input":$r(r),$o(r,u,!0);break;case"textarea":$r(r),hl(r);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(r.onclick=kr)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(d=n.nodeType===9?n:n.ownerDocument,e===ti&&(e=Uo(i)),e===ti?i==="script"?(e=d.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(i,{is:r.is}):(e=d.createElement(i),i==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,i),e[qt]=t,e[mo]=r,Ha(e,t,!1,!1),t.stateNode=e,d=oo(i,r),i){case"iframe":case"object":case"embed":ke("load",e),p=r;break;case"video":case"audio":for(p=0;p<hn.length;p++)ke(hn[p],e);p=r;break;case"source":ke("error",e),p=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),p=r;break;case"form":ke("reset",e),ke("submit",e),p=r;break;case"details":ke("toggle",e),p=r;break;case"input":zo(e,r),p=mn(e,r),ke("invalid",e),Dt(n,"onChange");break;case"option":p=jo(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},p=I({},r,{value:void 0}),ke("invalid",e),Dt(n,"onChange");break;case"textarea":Bo(e,r),p=Ur(e,r),ke("invalid",e),Dt(n,"onChange");break;default:p=r}ro(i,p);var k=p;for(u in k)if(k.hasOwnProperty(u)){var b=k[u];u==="style"?ei(e,b):u==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&Wr(e,b)):u==="children"?typeof b=="string"?(i!=="textarea"||b!=="")&&An(e,b):typeof b=="number"&&An(e,""+b):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(A.hasOwnProperty(u)?b!=null&&Dt(n,u):b!=null&&Do(e,u,b,d))}switch(i){case"input":$r(e),$o(e,r,!1);break;case"textarea":$r(e),hl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?pn(e,!!r.multiple,n,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof p.onClick=="function"&&(e.onclick=kr)}Un(i,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)za(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));n=Xn(Lo.current),Xn(Kt.current),Bi(t)?(n=t.stateNode,r=t.memoizedProps,n[qt]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[qt]=t,t.stateNode=n)}return null;case 13:return qe(Ye),r=t.memoizedState,(t.effectTag&64)!=0?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&Bi(t):(i=e.memoizedState,r=i!==null,n||i===null||(i=e.child.sibling,i!==null&&(u=t.firstEffect,u!==null?(t.firstEffect=i,i.nextEffect=u):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8))),n&&!r&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(Ye.current&1)!=0?et===er&&(et=Zi):((et===er||et===Zi)&&(et=Qi),So!==0&&Et!==null&&(sr(Et,yt),du(Et,So)))),(n||r)&&(t.effectTag|=4),null);case 4:return Dr(),Cs(t),null;case 10:return Gl(t),null;case 17:return gt(t.type)&&Ei(),null;case 19:if(qe(Ye),r=t.memoizedState,r===null)return null;if(i=(t.effectTag&64)!=0,u=r.rendering,u===null){if(i)Ui(r,!1);else if(et!==er||e!==null&&(e.effectTag&64)!=0)for(u=t.child;u!==null;){if(e=Ii(u),e!==null){for(t.effectTag|=64,Ui(r,!1),i=e.updateQueue,i!==null&&(t.updateQueue=i,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)i=r,u=n,i.effectTag&=2,i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,e=i.alternate,e===null?(i.childExpirationTime=0,i.expirationTime=u,i.child=null,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null):(i.childExpirationTime=e.childExpirationTime,i.expirationTime=e.expirationTime,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,u=e.dependencies,i.dependencies=u===null?null:{expirationTime:u.expirationTime,firstContext:u.firstContext,responders:u.responders}),r=r.sibling;return Xe(Ye,Ye.current&1|2),t.child}u=u.sibling}}else{if(!i)if(e=Ii(u),e!==null){if(t.effectTag|=64,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),Ui(r,!0),r.tail===null&&r.tailMode==="hidden"&&!u.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*Tt()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,i=!0,Ui(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(u.sibling=t.child,t.child=u):(n=r.last,n!==null?n.sibling=u:t.child=u,r.last=u)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=Tt()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Tt(),n.sibling=null,t=Ye.current,Xe(Ye,i?t&1|2:t&1),n):null}throw Error(h(156,t.tag))}l(Iu,"si");function Au(e){switch(e.tag){case 1:gt(e.type)&&Ei();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(Dr(),qe(vt),qe(at),t=e.effectTag,(t&64)!=0)throw Error(h(285));return e.effectTag=t&-4097|64,e;case 5:return os(e),null;case 13:return qe(Ye),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return qe(Ye),null;case 4:return Dr(),null;case 10:return Gl(e),null;default:return null}}l(Au,"zi");function xs(e,t){return{value:e,source:t,stack:Vr(t)}}l(xs,"Ai");var Hu=typeof WeakSet=="function"?WeakSet:Set;function Es(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=Vr(n)),n!==null&&$t(n.type),t=t.value,e!==null&&e.tag===1&&$t(e.type);try{console.error(t)}catch(i){setTimeout(function(){throw i})}}l(Es,"Ci");function Fu(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){ir(e,n)}}l(Fu,"Di");function Va(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){ir(e,n)}else t.current=null}l(Va,"Fi");function zu(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:zt(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(h(163))}l(zu,"Gi");function $a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}l($a,"Hi");function ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}l(ja,"Ii");function Vu(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:ja(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:zt(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&ca(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}ca(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&Un(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Jr(n))));return;case 19:case 17:case 20:case 21:return}throw Error(h(163))}l(Vu,"Ji");function Ba(e,t,n){switch(typeof Ds=="function"&&Ds(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;bn(97<n?97:n,function(){var i=r;do{var u=i.destroy;if(u!==void 0){var d=t;try{u()}catch(p){ir(d,p)}}i=i.next}while(i!==r)})}break;case 1:Va(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Fu(t,n);break;case 5:Va(t);break;case 4:Za(e,t,n)}}l(Ba,"Ki");function Ua(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&Ua(t)}l(Ua,"Ni");function Wa(e){return e.tag===5||e.tag===3||e.tag===4}l(Wa,"Oi");function qa(e){e:{for(var t=e.return;t!==null;){if(Wa(t)){var n=t;break e}t=t.return}throw Error(h(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(h(161))}n.effectTag&16&&(An(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||Wa(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?ks(e,n,t):bs(e,n,t)}l(qa,"Pi");function ks(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kr));else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}l(ks,"Qi");function bs(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}l(bs,"Ri");function Za(e,t,n){for(var r=t,i=!1,u,d;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(h(160));switch(u=i.stateNode,i.tag){case 5:d=!1;break e;case 3:u=u.containerInfo,d=!0;break e;case 4:u=u.containerInfo,d=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var p=e,k=r,b=n,G=k;;)if(Ba(p,G,b),G.child!==null&&G.tag!==4)G.child.return=G,G=G.child;else{if(G===k)break e;for(;G.sibling===null;){if(G.return===null||G.return===k)break e;G=G.return}G.sibling.return=G.return,G=G.sibling}d?(p=u,k=r.stateNode,p.nodeType===8?p.parentNode.removeChild(k):p.removeChild(k)):u.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){u=r.stateNode.containerInfo,d=!0,r.child.return=r,r=r.child;continue}}else if(Ba(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}l(Za,"Mi");function _s(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:$a(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,i=e!==null?e.memoizedProps:r;e=t.type;var u=t.updateQueue;if(t.updateQueue=null,u!==null){for(n[mo]=r,e==="input"&&r.type==="radio"&&r.name!=null&&Vo(n,r),oo(e,i),t=oo(e,r),i=0;i<u.length;i+=2){var d=u[i],p=u[i+1];d==="style"?ei(n,p):d==="dangerouslySetInnerHTML"?Wr(n,p):d==="children"?An(n,p):Do(n,d,p,t)}switch(e){case"input":jr(n,r);break;case"textarea":pl(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?pn(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?pn(n,!!r.multiple,r.defaultValue,!0):pn(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(h(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,Jr(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,Ss=Tt()),n!==null)e:for(e=n;;){if(e.tag===5)u=e.stateNode,r?(u=u.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(u=e.stateNode,i=e.memoizedProps.style,i=i!=null&&i.hasOwnProperty("display")?i.display:null,u.style.display=Jo("display",i));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){u=e.child.sibling,u.return=e,e=u;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}Qa(t);return;case 19:Qa(t);return;case 17:return}throw Error(h(163))}l(_s,"Si");function Qa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hu),t.forEach(function(r){var i=Yu.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}l(Qa,"Ui");var $u=typeof WeakMap=="function"?WeakMap:Map;function Ka(e,t,n){n=Ln(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gi||(Gi=!0,Ms=r),Es(e,t)},n}l(Ka,"Xi");function Ya(e,t,n){n=Ln(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Es(e,t),r(i)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this),Es(e,t));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}l(Ya,"$i");var ju=Math.ceil,Wi=dt.ReactCurrentDispatcher,Xa=dt.ReactCurrentOwner,Je=0,Ls=8,Vt=16,Xt=32,er=0,qi=1,Ga=2,Zi=3,Qi=4,Ts=5,Ce=Je,Et=null,be=null,yt=0,et=er,Ki=null,cn=1073741823,To=1073741823,Yi=null,So=0,Xi=!1,Ss=0,Ja=500,ce=null,Gi=!1,Ms=null,Nn=null,Ji=!1,Mo=null,No=90,tr=null,Po=0,Ns=null,el=0;function Gt(){return(Ce&(Vt|Xt))!==Je?1073741821-(Tt()/10|0):el!==0?el:el=1073741821-(Tt()/10|0)}l(Gt,"Gg");function nr(e,t,n){if(t=t.mode,(t&2)==0)return 1073741823;var r=Li();if((t&4)==0)return r===99?1073741823:1073741822;if((Ce&Vt)!==Je)return yt;if(n!==null)e=Ti(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Ti(e,150,100);break;case 97:case 96:e=Ti(e,5e3,250);break;case 95:e=2;break;default:throw Error(h(326))}return Et!==null&&e===yt&&--e,e}l(nr,"Hg");function Pn(e,t){if(50<Po)throw Po=0,Ns=null,Error(h(185));if(e=tl(e,t),e!==null){var n=Li();t===1073741823?(Ce&Ls)!==Je&&(Ce&(Vt|Xt))===Je?Ps(e):(kt(e),Ce===Je&&Qt()):kt(e),(Ce&4)===Je||n!==98&&n!==99||(tr===null?tr=new Map([[e,t]]):(n=tr.get(e),(n===void 0||n>t)&&tr.set(e,t)))}}l(Pn,"Ig");function tl(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(r===null&&e.tag===3)i=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){i=r.stateNode;break}r=r.return}return i!==null&&(Et===i&&(rl(t),et===Qi&&sr(i,yt)),du(i,t)),i}l(tl,"xj");function nl(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!cu(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}l(nl,"zj");function kt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=la(Ps.bind(null,e));else{var t=nl(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Gt();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==na&&Ys(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?la(Ps.bind(null,e)):ia(r,eu.bind(null,e),{timeout:10*(1073741821-t)-Tt()}),e.callbackNode=t}}}l(kt,"Z");function eu(e,t){if(el=0,t)return t=Gt(),Fs(e,t),kt(e),null;var n=nl(e);if(n!==0){if(t=e.callbackNode,(Ce&(Vt|Xt))!==Je)throw Error(h(327));if(Hr(),e===Et&&n===yt||rr(e,n),be!==null){var r=Ce;Ce|=Vt;var i=ou();do try{Wu();break}catch(p){ru(e,p)}while(1);if(Xl(),Ce=r,Wi.current=i,et===qi)throw t=Ki,rr(e,n),sr(e,n),kt(e),t;if(be===null)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=et,Et=null,r){case er:case qi:throw Error(h(345));case Ga:Fs(e,2<n?2:n);break;case Zi:if(sr(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Rs(i)),cn===1073741823&&(i=Ss+Ja-Tt(),10<i)){if(Xi){var u=e.lastPingedTime;if(u===0||u>=n){e.lastPingedTime=n,rr(e,n);break}}if(u=nl(e),u!==0&&u!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=co(or.bind(null,e),i);break}or(e);break;case Qi:if(sr(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=Rs(i)),Xi&&(i=e.lastPingedTime,i===0||i>=n)){e.lastPingedTime=n,rr(e,n);break}if(i=nl(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(To!==1073741823?r=10*(1073741821-To)-Tt():cn===1073741823?r=0:(r=10*(1073741821-cn)-5e3,i=Tt(),n=10*(1073741821-n)-i,r=i-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ju(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=co(or.bind(null,e),r);break}or(e);break;case Ts:if(cn!==1073741823&&Yi!==null){u=cn;var d=Yi;if(r=d.busyMinDurationMs|0,0>=r?r=0:(i=d.busyDelayMs|0,u=Tt()-(10*(1073741821-u)-(d.timeoutMs|0||5e3)),r=u<=i?0:i+r-u),10<r){sr(e,n),e.timeoutHandle=co(or.bind(null,e),r);break}}or(e);break;default:throw Error(h(329))}if(kt(e),e.callbackNode===t)return eu.bind(null,e)}}return null}l(eu,"Bj");function Ps(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(Ce&(Vt|Xt))!==Je)throw Error(h(327));if(Hr(),e===Et&&t===yt||rr(e,t),be!==null){var n=Ce;Ce|=Vt;var r=ou();do try{Uu();break}catch(i){ru(e,i)}while(1);if(Xl(),Ce=n,Wi.current=r,et===qi)throw n=Ki,rr(e,t),sr(e,t),kt(e),n;if(be!==null)throw Error(h(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Et=null,or(e),kt(e)}return null}l(Ps,"yj");function Bu(){if(tr!==null){var e=tr;tr=null,e.forEach(function(t,n){Fs(n,t),kt(n)}),Qt()}}l(Bu,"Lj");function tu(e,t){var n=Ce;Ce|=1;try{return e(t)}finally{Ce=n,Ce===Je&&Qt()}}l(tu,"Mj");function nu(e,t){var n=Ce;Ce&=-2,Ce|=Ls;try{return e(t)}finally{Ce=n,Ce===Je&&Qt()}}l(nu,"Nj");function rr(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Il(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:Dr(),qe(vt),qe(at);break;case 5:os(r);break;case 4:Dr();break;case 13:qe(Ye);break;case 19:qe(Ye);break;case 10:Gl(r)}n=n.return}Et=e,be=lr(e.current,null),yt=t,et=er,Ki=null,To=cn=1073741823,Yi=null,So=0,Xi=!1}l(rr,"Ej");function ru(e,t){do{try{if(Xl(),Ai.current=ji,Hi)for(var n=Ge.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(Sn=0,ct=ut=Ge=null,Hi=!1,be===null||be.return===null)return et=qi,Ki=t,be=null;e:{var i=e,u=be.return,d=be,p=t;if(t=yt,d.effectTag|=2048,d.firstEffect=d.lastEffect=null,p!==null&&typeof p=="object"&&typeof p.then=="function"){var k=p;if((d.mode&2)==0){var b=d.alternate;b?(d.updateQueue=b.updateQueue,d.memoizedState=b.memoizedState,d.expirationTime=b.expirationTime):(d.updateQueue=null,d.memoizedState=null)}var G=(Ye.current&1)!=0,le=u;do{var Ne;if(Ne=le.tag===13){var Fe=le.memoizedState;if(Fe!==null)Ne=Fe.dehydrated!==null;else{var Nt=le.memoizedProps;Ne=Nt.fallback===void 0?!1:Nt.unstable_avoidThisFallback!==!0?!0:!G}}if(Ne){var rt=le.updateQueue;if(rt===null){var x=new Set;x.add(k),le.updateQueue=x}else rt.add(k);if((le.mode&2)==0){if(le.effectTag|=64,d.effectTag&=-2981,d.tag===1)if(d.alternate===null)d.tag=17;else{var C=Ln(1073741823,null);C.tag=2,Tn(d,C)}d.expirationTime=1073741823;break e}p=void 0,d=t;var L=i.pingCache;if(L===null?(L=i.pingCache=new $u,p=new Set,L.set(k,p)):(p=L.get(k),p===void 0&&(p=new Set,L.set(k,p))),!p.has(d)){p.add(d);var U=Ku.bind(null,i,k,d);k.then(U,U)}le.effectTag|=4096,le.expirationTime=t;break e}le=le.return}while(le!==null);p=Error(($t(d.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+Vr(d))}et!==Ts&&(et=Ga),p=xs(p,d),le=u;do{switch(le.tag){case 3:k=p,le.effectTag|=4096,le.expirationTime=t;var Q=Ka(le,k,t);ua(le,Q);break e;case 1:k=p;var ae=le.type,ge=le.stateNode;if((le.effectTag&64)==0&&(typeof ae.getDerivedStateFromError=="function"||ge!==null&&typeof ge.componentDidCatch=="function"&&(Nn===null||!Nn.has(ge)))){le.effectTag|=4096,le.expirationTime=t;var Oe=Ya(le,k,t);ua(le,Oe);break e}}le=le.return}while(le!==null)}be=su(be)}catch(Qe){t=Qe;continue}break}while(1)}l(ru,"Hj");function ou(){var e=Wi.current;return Wi.current=ji,e===null?ji:e}l(ou,"Fj");function iu(e,t){e<cn&&2<e&&(cn=e),t!==null&&e<To&&2<e&&(To=e,Yi=t)}l(iu,"Ag");function rl(e){e>So&&(So=e)}l(rl,"Bg");function Uu(){for(;be!==null;)be=lu(be)}l(Uu,"Kj");function Wu(){for(;be!==null&&!Mu();)be=lu(be)}l(Wu,"Gj");function lu(e){var t=uu(e.alternate,e,yt);return e.memoizedProps=e.pendingProps,t===null&&(t=su(e)),Xa.current=null,t}l(lu,"Qj");function su(e){be=e;do{var t=be.alternate;if(e=be.return,(be.effectTag&2048)==0){if(t=Iu(t,be,yt),yt===1||be.childExpirationTime!==1){for(var n=0,r=be.child;r!==null;){var i=r.expirationTime,u=r.childExpirationTime;i>n&&(n=i),u>n&&(n=u),r=r.sibling}be.childExpirationTime=n}if(t!==null)return t;e!==null&&(e.effectTag&2048)==0&&(e.firstEffect===null&&(e.firstEffect=be.firstEffect),be.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=be.firstEffect),e.lastEffect=be.lastEffect),1<be.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=be:e.firstEffect=be,e.lastEffect=be))}else{if(t=Au(be),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(t=be.sibling,t!==null)return t;be=e}while(be!==null);return et===er&&(et=Ts),null}l(su,"Pj");function Rs(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}l(Rs,"Ij");function or(e){var t=Li();return bn(99,qu.bind(null,e,t)),null}l(or,"Jj");function qu(e,t){do Hr();while(Mo!==null);if((Ce&(Vt|Xt))!==Je)throw Error(h(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=Rs(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Et&&(be=Et=null,yt=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){var u=Ce;Ce|=Xt,Xa.current=null,ao=xr;var d=li();if(io(d)){if("selectionStart"in d)var p={start:d.selectionStart,end:d.selectionEnd};else e:{p=(p=d.ownerDocument)&&p.defaultView||window;var k=p.getSelection&&p.getSelection();if(k&&k.rangeCount!==0){p=k.anchorNode;var b=k.anchorOffset,G=k.focusNode;k=k.focusOffset;try{p.nodeType,G.nodeType}catch(_e){p=null;break e}var le=0,Ne=-1,Fe=-1,Nt=0,rt=0,x=d,C=null;t:for(;;){for(var L;x!==p||b!==0&&x.nodeType!==3||(Ne=le+b),x!==G||k!==0&&x.nodeType!==3||(Fe=le+k),x.nodeType===3&&(le+=x.nodeValue.length),(L=x.firstChild)!==null;)C=x,x=L;for(;;){if(x===d)break t;if(C===p&&++Nt===b&&(Ne=le),C===G&&++rt===k&&(Fe=le),(L=x.nextSibling)!==null)break;x=C,C=x.parentNode}x=L}p=Ne===-1||Fe===-1?null:{start:Ne,end:Fe}}else p=null}p=p||{start:0,end:0}}else p=null;uo={activeElementDetached:null,focusedElem:d,selectionRange:p},xr=!1,ce=i;do try{Zu()}catch(_e){if(ce===null)throw Error(h(330));ir(ce,_e),ce=ce.nextEffect}while(ce!==null);ce=i;do try{for(d=e,p=t;ce!==null;){var U=ce.effectTag;if(U&16&&An(ce.stateNode,""),U&128){var Q=ce.alternate;if(Q!==null){var ae=Q.ref;ae!==null&&(typeof ae=="function"?ae(null):ae.current=null)}}switch(U&1038){case 2:qa(ce),ce.effectTag&=-3;break;case 6:qa(ce),ce.effectTag&=-3,_s(ce.alternate,ce);break;case 1024:ce.effectTag&=-1025;break;case 1028:ce.effectTag&=-1025,_s(ce.alternate,ce);break;case 4:_s(ce.alternate,ce);break;case 8:b=ce,Za(d,b,p),Ua(b)}ce=ce.nextEffect}}catch(_e){if(ce===null)throw Error(h(330));ir(ce,_e),ce=ce.nextEffect}while(ce!==null);if(ae=uo,Q=li(),U=ae.focusedElem,p=ae.selectionRange,Q!==U&&U&&U.ownerDocument&&ii(U.ownerDocument.documentElement,U)){for(p!==null&&io(U)&&(Q=p.start,ae=p.end,ae===void 0&&(ae=Q),"selectionStart"in U?(U.selectionStart=Q,U.selectionEnd=Math.min(ae,U.value.length)):(ae=(Q=U.ownerDocument||document)&&Q.defaultView||window,ae.getSelection&&(ae=ae.getSelection(),b=U.textContent.length,d=Math.min(p.start,b),p=p.end===void 0?d:Math.min(p.end,b),!ae.extend&&d>p&&(b=p,p=d,d=b),b=oi(U,d),G=oi(U,p),b&&G&&(ae.rangeCount!==1||ae.anchorNode!==b.node||ae.anchorOffset!==b.offset||ae.focusNode!==G.node||ae.focusOffset!==G.offset)&&(Q=Q.createRange(),Q.setStart(b.node,b.offset),ae.removeAllRanges(),d>p?(ae.addRange(Q),ae.extend(G.node,G.offset)):(Q.setEnd(G.node,G.offset),ae.addRange(Q)))))),Q=[],ae=U;ae=ae.parentNode;)ae.nodeType===1&&Q.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Q.length;U++)ae=Q[U],ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}xr=!!ao,uo=ao=null,e.current=n,ce=i;do try{for(U=e;ce!==null;){var ge=ce.effectTag;if(ge&36&&Vu(U,ce.alternate,ce),ge&128){Q=void 0;var Oe=ce.ref;if(Oe!==null){var Qe=ce.stateNode;switch(ce.tag){case 5:Q=Qe;break;default:Q=Qe}typeof Oe=="function"?Oe(Q):Oe.current=Q}}ce=ce.nextEffect}}catch(_e){if(ce===null)throw Error(h(330));ir(ce,_e),ce=ce.nextEffect}while(ce!==null);ce=null,Nu(),Ce=u}else e.current=n;if(Ji)Ji=!1,Mo=e,No=t;else for(ce=i;ce!==null;)t=ce.nextEffect,ce.nextEffect=null,ce=t;if(t=e.firstPendingTime,t===0&&(Nn=null),t===1073741823?e===Ns?Po++:(Po=0,Ns=e):Po=0,typeof Os=="function"&&Os(n.stateNode,r),kt(e),Gi)throw Gi=!1,e=Ms,Ms=null,e;return(Ce&Ls)!==Je||Qt(),null}l(qu,"Sj");function Zu(){for(;ce!==null;){var e=ce.effectTag;(e&256)!=0&&zu(ce.alternate,ce),(e&512)==0||Ji||(Ji=!0,ia(97,function(){return Hr(),null})),ce=ce.nextEffect}}l(Zu,"Tj");function Hr(){if(No!==90){var e=97<No?97:No;return No=90,bn(e,Qu)}}l(Hr,"Dj");function Qu(){if(Mo===null)return!1;var e=Mo;if(Mo=null,(Ce&(Vt|Xt))!==Je)throw Error(h(331));var t=Ce;for(Ce|=Xt,e=e.current.firstEffect;e!==null;){try{var n=e;if((n.effectTag&512)!=0)switch(n.tag){case 0:case 11:case 15:case 22:$a(5,n),ja(5,n)}}catch(r){if(e===null)throw Error(h(330));ir(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return Ce=t,Qt(),!0}l(Qu,"Vj");function au(e,t,n){t=xs(n,t),t=Ka(e,t,1073741823),Tn(e,t),e=tl(e,1073741823),e!==null&&kt(e)}l(au,"Wj");function ir(e,t){if(e.tag===3)au(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){au(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nn===null||!Nn.has(r))){e=xs(t,e),e=Ya(n,e,1073741823),Tn(n,e),n=tl(n,1073741823),n!==null&&kt(n);break}}n=n.return}}l(ir,"Ei");function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),Et===e&&yt===n?et===Qi||et===Zi&&cn===1073741823&&Tt()-Ss<Ja?rr(e,yt):Xi=!0:cu(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,kt(e)))}l(Ku,"Oj");function Yu(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Gt(),t=nr(t,e,null)),e=tl(e,t),e!==null&&kt(e)}l(Yu,"Vi");var uu;uu=l(function(e,t,n){var r=t.expirationTime;if(e!==null){var i=t.pendingProps;if(e.memoizedProps!==i||vt.current)Yt=!0;else{if(r<n){switch(Yt=!1,t.tag){case 3:Oa(t),hs();break;case 5:if(va(t),t.mode&4&&n!==1&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:gt(t.type)&&ki(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,Xe(Si,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?Da(e,t,n):(Xe(Ye,Ye.current&1),t=un(e,t,n),t!==null?t.sibling:null);Xe(Ye,Ye.current&1);break;case 19:if(r=t.childExpirationTime>=n,(e.effectTag&64)!=0){if(r)return Aa(e,t,n);t.effectTag|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null),Xe(Ye,Ye.current),!r)return null}return un(e,t,n)}Yt=!1}}else Yt=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=Nr(t,at.current),Rr(t,n),i=ss(null,t,r,e,i,n),t.effectTag|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(r)){var u=!0;ki(t)}else u=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jl(t);var d=r.getDerivedStateFromProps;typeof d=="function"&&Pi(t,r,d,e),i.updater=Ri,t.stateNode=i,i._reactInternalFiber=t,ts(t,r,e,n),t=gs(null,t,r,!0,u,n)}else t.tag=0,xt(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,js(i),i._status!==1)throw i._result;switch(i=i._result,t.type=i,u=t.tag=Ju(i),e=zt(i,e),u){case 0:t=vs(null,t,i,e,n);break e;case 1:t=Ra(null,t,i,e,n);break e;case 11:t=Sa(null,t,i,e,n);break e;case 14:t=Ma(null,t,i,zt(i.type,e),r,n);break e}throw Error(h(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),vs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Ra(e,t,r,i,n);case 3:if(Oa(t),r=t.updateQueue,e===null||r===null)throw Error(h(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,es(e,t),xo(t,r,null,n),r=t.memoizedState.element,r===i)hs(),t=un(e,t,n);else{if((i=t.stateNode.hydrate)&&(Mn=on(t.stateNode.containerInfo.firstChild),an=t,i=Jn=!0),i)for(n=ns(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else xt(e,t,r,n),hs();t=t.child}return t;case 5:return va(t),e===null&&ps(t),r=t.type,i=t.pendingProps,u=e!==null?e.memoizedProps:null,d=i.children,br(r,i)?d=null:u!==null&&br(r,u)&&(t.effectTag|=16),Pa(e,t),t.mode&4&&n!==1&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(xt(e,t,d,n),t=t.child),t;case 6:return e===null&&ps(t),null;case 13:return Da(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):xt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Sa(e,t,r,i,n);case 7:return xt(e,t,t.pendingProps,n),t.child;case 8:return xt(e,t,t.pendingProps.children,n),t.child;case 12:return xt(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,d=t.memoizedProps,u=i.value;var p=t.type._context;if(Xe(Si,p._currentValue),p._currentValue=u,d!==null)if(p=d.value,u=Ve(p,u)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(p,u):1073741823)|0,u===0){if(d.children===i.children&&!vt.current){t=un(e,t,n);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var k=p.dependencies;if(k!==null){d=p.child;for(var b=k.firstContext;b!==null;){if(b.context===r&&(b.observedBits&u)!=0){p.tag===1&&(b=Ln(n,null),b.tag=2,Tn(p,b)),p.expirationTime<n&&(p.expirationTime=n),b=p.alternate,b!==null&&b.expirationTime<n&&(b.expirationTime=n),aa(p.return,n),k.expirationTime<n&&(k.expirationTime=n);break}b=b.next}}else d=p.tag===10&&p.type===t.type?null:p.child;if(d!==null)d.return=p;else for(d=p;d!==null;){if(d===t){d=null;break}if(p=d.sibling,p!==null){p.return=d.return,d=p;break}d=d.return}p=d}xt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,u=t.pendingProps,r=u.children,Rr(t,n),i=St(i,u.unstable_observedBits),r=r(i),t.effectTag|=1,xt(e,t,r,n),t.child;case 14:return i=t.type,u=zt(i,t.pendingProps),u=zt(i.type,u),Ma(e,t,i,u,r,n);case 15:return Na(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,gt(r)?(e=!0,ki(t)):e=!1,Rr(t,n),ma(t,r,i),ts(t,r,i,n),gs(null,t,r,!0,e,n);case 19:return Aa(e,t,n)}throw Error(h(156,t.tag))},"Rj");var Os=null,Ds=null;function Xu(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);Os=l(function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)==64)}catch(i){}},"Uj"),Ds=l(function(r){try{t.onCommitFiberUnmount(n,r)}catch(i){}},"Li")}catch(r){}return!0}l(Xu,"Yj");function Gu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}l(Gu,"Zj");function Jt(e,t,n,r){return new Gu(e,t,n,r)}l(Jt,"Sh");function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}l(Is,"bi");function Ju(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Io)return 11;if(e===Ho)return 14}return 2}l(Ju,"Xj");function lr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}l(lr,"Sg");function ol(e,t,n,r,i,u){var d=2;if(r=e,typeof e=="function")Is(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case en:return Rn(n.children,i,u,t);case ul:d=8,i|=7;break;case ur:d=8,i|=1;break;case Dn:return e=Jt(12,n,t,i|8),e.elementType=Dn,e.type=Dn,e.expirationTime=u,e;case zr:return e=Jt(13,n,t,i),e.type=zr,e.elementType=zr,e.expirationTime=u,e;case Ao:return e=Jt(19,n,t,i),e.elementType=Ao,e.expirationTime=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fn:d=10;break e;case Pt:d=9;break e;case Io:d=11;break e;case Ho:d=14;break e;case cl:d=16,r=null;break e;case dl:d=22;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Jt(d,n,t,i),t.elementType=e,t.type=r,t.expirationTime=u,t}l(ol,"Ug");function Rn(e,t,n,r){return e=Jt(7,e,r,t),e.expirationTime=n,e}l(Rn,"Wg");function As(e,t,n){return e=Jt(6,e,null,t),e.expirationTime=n,e}l(As,"Tg");function Hs(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}l(Hs,"Vg");function ec(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}l(ec,"ak");function cu(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}l(cu,"Aj");function sr(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}l(sr,"xi");function du(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}l(du,"yi");function Fs(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}l(Fs,"Cj");function il(e,t,n,r){var i=t.current,u=Gt(),d=Eo.suspense;u=nr(u,i,d);e:if(n){n=n._reactInternalFiber;t:{if(Bt(n)!==n||n.tag!==1)throw Error(h(170));var p=n;do{switch(p.tag){case 3:p=p.stateNode.context;break t;case 1:if(gt(p.type)){p=p.stateNode.__reactInternalMemoizedMergedChildContext;break t}}p=p.return}while(p!==null);throw Error(h(171))}if(n.tag===1){var k=n.type;if(gt(k)){n=Qs(n,k,p);break e}}n=p}else n=kn;return t.context===null?t.context=n:t.pendingContext=n,t=Ln(u,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Tn(i,t),Pn(i,u),u}l(il,"bk");function zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}l(zs,"ck");function fu(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}l(fu,"dk");function Vs(e,t){fu(e,t),(e=e.alternate)&&fu(e,t)}l(Vs,"ek");function $s(e,t,n){n=n!=null&&n.hydrate===!0;var r=new ec(e,t,n),i=Jt(3,null,null,t===2?7:t===1?3:0);r.current=i,i.stateNode=r,Jl(i),e[Wn]=r.current,n&&t!==0&&yr(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}l($s,"fk"),$s.prototype.render=function(e){il(e,this._internalRoot,null,null)},$s.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;il(null,e,null,function(){t[Wn]=null})};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}l(Ro,"gk");function tc(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new $s(e,0,t?{hydrate:!0}:void 0)}l(tc,"hk");function ll(e,t,n,r,i){var u=n._reactRootContainer;if(u){var d=u._internalRoot;if(typeof i=="function"){var p=i;i=l(function(){var b=zs(d);p.call(b)},"e")}il(t,d,e,i)}else{if(u=n._reactRootContainer=tc(n,r),d=u._internalRoot,typeof i=="function"){var k=i;i=l(function(){var b=zs(d);k.call(b)},"e")}nu(function(){il(t,d,e,i)})}return zs(d)}l(ll,"ik");function nc(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}l(nc,"jk"),xl=l(function(e){if(e.tag===13){var t=Ti(Gt(),150,100);Pn(e,t),Vs(e,t)}},"wc"),gr=l(function(e){e.tag===13&&(Pn(e,3),Vs(e,3))},"xc"),Rt=l(function(e){if(e.tag===13){var t=Gt();t=nr(t,e,null),Pn(e,t),Vs(e,t)}},"yc"),ie=l(function(e,t,n){switch(t){case"input":if(jr(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(h(90));Fo(r),jr(r,i)}}}break;case"textarea":pl(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}},"za"),Ze=tu,Me=l(function(e,t,n,r,i){var u=Ce;Ce|=4;try{return bn(98,e.bind(null,t,n,r,i))}finally{Ce=u,Ce===Je&&Qt()}},"Ga"),Te=l(function(){(Ce&(1|Vt|Xt))===Je&&(Bu(),Hr())},"Ha"),tt=l(function(e,t){var n=Ce;Ce|=2;try{return e(t)}finally{Ce=n,Ce===Je&&Qt()}},"Ia");function mu(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(h(200));return nc(e,t,null,n)}l(mu,"kk");var rc={Events:[Zn,Zt,po,Z,N,ln,function(e){hr(e,Al)},Ie,Be,Er,zn,Hr,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return Xu(I({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yr(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:qn,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}),J=rc,J=mu,J=l(function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):Error(h(268,Object.keys(e)));return e=Yr(t),e=e===null?null:e.stateNode,e},"__webpack_unused_export__"),J=l(function(e,t){if((Ce&(Vt|Xt))!==Je)throw Error(h(187));var n=Ce;Ce|=1;try{return bn(99,e.bind(null,t))}finally{Ce=n,Qt()}},"__webpack_unused_export__"),J=l(function(e,t,n){if(!Ro(t))throw Error(h(200));return ll(null,e,t,!0,n)},"__webpack_unused_export__"),S.render=function(e,t,n){if(!Ro(t))throw Error(h(200));return ll(null,e,t,!1,n)},J=l(function(e){if(!Ro(e))throw Error(h(40));return e._reactRootContainer?(nu(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1},"__webpack_unused_export__"),J=tu,J=l(function(e,t){return mu(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)},"__webpack_unused_export__"),J=l(function(e,t,n,r){if(!Ro(n))throw Error(h(200));if(e==null||e._reactInternalFiber===void 0)throw Error(h(38));return ll(e,t,n,!1,r)},"__webpack_unused_export__"),J="16.14.0"},3935:(D,S,Y)=>{"use strict";function J(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J)}catch(ee){console.error(ee)}}l(J,"checkDCE"),J(),D.exports=Y(4448)},2408:(D,S,Y)=>{"use strict";/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J=Y(7418),ee=typeof Symbol=="function"&&Symbol.for,I=ee?Symbol.for("react.element"):60103,y=ee?Symbol.for("react.portal"):60106,h=ee?Symbol.for("react.fragment"):60107,H=ee?Symbol.for("react.strict_mode"):60108,z=ee?Symbol.for("react.profiler"):60114,W=ee?Symbol.for("react.provider"):60109,s=ee?Symbol.for("react.context"):60110,ne=ee?Symbol.for("react.forward_ref"):60112,te=ee?Symbol.for("react.suspense"):60113,De=ee?Symbol.for("react.memo"):60115,Pe=ee?Symbol.for("react.lazy"):60116,j=typeof Symbol=="function"&&Symbol.iterator;function K(g){for(var P="https://reactjs.org/docs/error-decoder.html?invariant="+g,pe=1;pe<arguments.length;pe++)P+="&args[]="+encodeURIComponent(arguments[pe]);return"Minified React error #"+g+"; visit "+P+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}l(K,"C");var de={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M={};function E(g,P,pe){this.props=g,this.context=P,this.refs=M,this.updater=pe||de}l(E,"F"),E.prototype.isReactComponent={},E.prototype.setState=function(g,P){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error(K(85));this.updater.enqueueSetState(this,g,P,"setState")},E.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function _(){}l(_,"G"),_.prototype=E.prototype;function q(g,P,pe){this.props=g,this.context=P,this.refs=M,this.updater=pe||de}l(q,"H");var R=q.prototype=new _;R.constructor=q,J(R,E.prototype),R.isPureReactComponent=!0;var V={current:null},N=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function $(g,P,pe){var we,xe={},ze=null,ot=null;if(P!=null)for(we in P.ref!==void 0&&(ot=P.ref),P.key!==void 0&&(ze=""+P.key),P)N.call(P,we)&&!A.hasOwnProperty(we)&&(xe[we]=P[we]);var Ee=arguments.length-2;if(Ee===1)xe.children=pe;else if(1<Ee){for(var Re=Array(Ee),pt=0;pt<Ee;pt++)Re[pt]=arguments[pt+2];xe.children=Re}if(g&&g.defaultProps)for(we in Ee=g.defaultProps,Ee)xe[we]===void 0&&(xe[we]=Ee[we]);return{$$typeof:I,type:g,key:ze,ref:ot,props:xe,_owner:V.current}}l($,"M");function Z(g,P){return{$$typeof:I,type:g.type,key:P,ref:g.ref,props:g.props,_owner:g._owner}}l(Z,"N");function ue(g){return typeof g=="object"&&g!==null&&g.$$typeof===I}l(ue,"O");function ie(g){var P={"=":"=0",":":"=2"};return"$"+(""+g).replace(/[=:]/g,function(pe){return P[pe]})}l(ie,"escape");var re=/\/+/g,fe=[];function Se(g,P,pe,we){if(fe.length){var xe=fe.pop();return xe.result=g,xe.keyPrefix=P,xe.func=pe,xe.context=we,xe.count=0,xe}return{result:g,keyPrefix:P,func:pe,context:we,count:0}}l(Se,"R");function Ie(g){g.result=null,g.keyPrefix=null,g.func=null,g.context=null,g.count=0,10>fe.length&&fe.push(g)}l(Ie,"S");function Be(g,P,pe,we){var xe=typeof g;(xe==="undefined"||xe==="boolean")&&(g=null);var ze=!1;if(g===null)ze=!0;else switch(xe){case"string":case"number":ze=!0;break;case"object":switch(g.$$typeof){case I:case y:ze=!0}}if(ze)return pe(we,g,P===""?"."+Me(g,0):P),1;if(ze=0,P=P===""?".":P+":",Array.isArray(g))for(var ot=0;ot<g.length;ot++){xe=g[ot];var Ee=P+Me(xe,ot);ze+=Be(xe,Ee,pe,we)}else if(g===null||typeof g!="object"?Ee=null:(Ee=j&&g[j]||g["@@iterator"],Ee=typeof Ee=="function"?Ee:null),typeof Ee=="function")for(g=Ee.call(g),ot=0;!(xe=g.next()).done;)xe=xe.value,Ee=P+Me(xe,ot++),ze+=Be(xe,Ee,pe,we);else if(xe==="object")throw pe=""+g,Error(K(31,pe==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":pe,""));return ze}l(Be,"T");function Ze(g,P,pe){return g==null?0:Be(g,"",P,pe)}l(Ze,"V");function Me(g,P){return typeof g=="object"&&g!==null&&g.key!=null?ie(g.key):P.toString(36)}l(Me,"U");function Te(g,P){g.func.call(g.context,P,g.count++)}l(Te,"W");function tt(g,P,pe){var we=g.result,xe=g.keyPrefix;g=g.func.call(g.context,P,g.count++),Array.isArray(g)?Ae(g,we,pe,function(ze){return ze}):g!=null&&(ue(g)&&(g=Z(g,xe+(!g.key||P&&P.key===g.key?"":(""+g.key).replace(re,"$&/")+"/")+pe)),we.push(g))}l(tt,"aa");function Ae(g,P,pe,we,xe){var ze="";pe!=null&&(ze=(""+pe).replace(re,"$&/")+"/"),P=Se(P,ze,we,xe),Ze(g,tt,P),Ie(P)}l(Ae,"X");var F={current:null};function X(){var g=F.current;if(g===null)throw Error(K(321));return g}l(X,"Z");var ye={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:V,IsSomeRendererActing:{current:!1},assign:J};S.Children={map:function(g,P,pe){if(g==null)return g;var we=[];return Ae(g,we,null,P,pe),we},forEach:function(g,P,pe){if(g==null)return g;P=Se(null,null,P,pe),Ze(g,Te,P),Ie(P)},count:function(g){return Ze(g,function(){return null},null)},toArray:function(g){var P=[];return Ae(g,P,null,function(pe){return pe}),P},only:function(g){if(!ue(g))throw Error(K(143));return g}},S.Component=E,S.Fragment=h,S.Profiler=z,S.PureComponent=q,S.StrictMode=H,S.Suspense=te,S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ye,S.cloneElement=function(g,P,pe){if(g==null)throw Error(K(267,g));var we=J({},g.props),xe=g.key,ze=g.ref,ot=g._owner;if(P!=null){if(P.ref!==void 0&&(ze=P.ref,ot=V.current),P.key!==void 0&&(xe=""+P.key),g.type&&g.type.defaultProps)var Ee=g.type.defaultProps;for(Re in P)N.call(P,Re)&&!A.hasOwnProperty(Re)&&(we[Re]=P[Re]===void 0&&Ee!==void 0?Ee[Re]:P[Re])}var Re=arguments.length-2;if(Re===1)we.children=pe;else if(1<Re){Ee=Array(Re);for(var pt=0;pt<Re;pt++)Ee[pt]=arguments[pt+2];we.children=Ee}return{$$typeof:I,type:g.type,key:xe,ref:ze,props:we,_owner:ot}},S.createContext=function(g,P){return P===void 0&&(P=null),g={$$typeof:s,_calculateChangedBits:P,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider={$$typeof:W,_context:g},g.Consumer=g},S.createElement=$,S.createFactory=function(g){var P=$.bind(null,g);return P.type=g,P},S.createRef=function(){return{current:null}},S.forwardRef=function(g){return{$$typeof:ne,render:g}},S.isValidElement=ue,S.lazy=function(g){return{$$typeof:Pe,_ctor:g,_status:-1,_result:null}},S.memo=function(g,P){return{$$typeof:De,type:g,compare:P===void 0?null:P}},S.useCallback=function(g,P){return X().useCallback(g,P)},S.useContext=function(g,P){return X().useContext(g,P)},S.useDebugValue=function(){},S.useEffect=function(g,P){return X().useEffect(g,P)},S.useImperativeHandle=function(g,P,pe){return X().useImperativeHandle(g,P,pe)},S.useLayoutEffect=function(g,P){return X().useLayoutEffect(g,P)},S.useMemo=function(g,P){return X().useMemo(g,P)},S.useReducer=function(g,P,pe){return X().useReducer(g,P,pe)},S.useRef=function(g){return X().useRef(g)},S.useState=function(g){return X().useState(g)},S.version="16.14.0"},7294:(D,S,Y)=>{"use strict";D.exports=Y(2408)},53:(D,S)=>{"use strict";/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y,J,ee,I,y;if(typeof window=="undefined"||typeof MessageChannel!="function"){var h=null,H=null,z=l(function(){if(h!==null)try{var F=S.unstable_now();h(!0,F),h=null}catch(X){throw setTimeout(z,0),X}},"t"),W=Date.now();S.unstable_now=function(){return Date.now()-W},Y=l(function(F){h!==null?setTimeout(Y,0,F):(h=F,setTimeout(z,0))},"f"),J=l(function(F,X){H=setTimeout(F,X)},"g"),ee=l(function(){clearTimeout(H)},"h"),I=l(function(){return!1},"k"),y=S.unstable_forceFrameRate=function(){}}else{var s=window.performance,ne=window.Date,te=window.setTimeout,De=window.clearTimeout;if(typeof console!="undefined"){var Pe=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof Pe!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof s=="object"&&typeof s.now=="function")S.unstable_now=function(){return s.now()};else{var j=ne.now();S.unstable_now=function(){return ne.now()-j}}var K=!1,de=null,M=-1,E=5,_=0;I=l(function(){return S.unstable_now()>=_},"k"),y=l(function(){},"l"),S.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):E=0<F?Math.floor(1e3/F):5};var q=new MessageChannel,R=q.port2;q.port1.onmessage=function(){if(de!==null){var F=S.unstable_now();_=F+E;try{de(!0,F)?R.postMessage(null):(K=!1,de=null)}catch(X){throw R.postMessage(null),X}}else K=!1},Y=l(function(F){de=F,K||(K=!0,R.postMessage(null))},"f"),J=l(function(F,X){M=te(function(){F(S.unstable_now())},X)},"g"),ee=l(function(){De(M),M=-1},"h")}function V(F,X){var ye=F.length;F.push(X);e:for(;;){var g=ye-1>>>1,P=F[g];if(P!==void 0&&0<$(P,X))F[g]=X,F[ye]=P,ye=g;else break e}}l(V,"J");function N(F){return F=F[0],F===void 0?null:F}l(N,"L");function A(F){var X=F[0];if(X!==void 0){var ye=F.pop();if(ye!==X){F[0]=ye;e:for(var g=0,P=F.length;g<P;){var pe=2*(g+1)-1,we=F[pe],xe=pe+1,ze=F[xe];if(we!==void 0&&0>$(we,ye))ze!==void 0&&0>$(ze,we)?(F[g]=ze,F[xe]=ye,g=xe):(F[g]=we,F[pe]=ye,g=pe);else if(ze!==void 0&&0>$(ze,ye))F[g]=ze,F[xe]=ye,g=xe;else break e}}return X}return null}l(A,"M");function $(F,X){var ye=F.sortIndex-X.sortIndex;return ye!==0?ye:F.id-X.id}l($,"K");var Z=[],ue=[],ie=1,re=null,fe=3,Se=!1,Ie=!1,Be=!1;function Ze(F){for(var X=N(ue);X!==null;){if(X.callback===null)A(ue);else if(X.startTime<=F)A(ue),X.sortIndex=X.expirationTime,V(Z,X);else break;X=N(ue)}}l(Ze,"V");function Me(F){if(Be=!1,Ze(F),!Ie)if(N(Z)!==null)Ie=!0,Y(Te);else{var X=N(ue);X!==null&&J(Me,X.startTime-F)}}l(Me,"W");function Te(F,X){Ie=!1,Be&&(Be=!1,ee()),Se=!0;var ye=fe;try{for(Ze(X),re=N(Z);re!==null&&(!(re.expirationTime>X)||F&&!I());){var g=re.callback;if(g!==null){re.callback=null,fe=re.priorityLevel;var P=g(re.expirationTime<=X);X=S.unstable_now(),typeof P=="function"?re.callback=P:re===N(Z)&&A(Z),Ze(X)}else A(Z);re=N(Z)}if(re!==null)var pe=!0;else{var we=N(ue);we!==null&&J(Me,we.startTime-X),pe=!1}return pe}finally{re=null,fe=ye,Se=!1}}l(Te,"X");function tt(F){switch(F){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}l(tt,"Y");var Ae=y;S.unstable_IdlePriority=5,S.unstable_ImmediatePriority=1,S.unstable_LowPriority=4,S.unstable_NormalPriority=3,S.unstable_Profiling=null,S.unstable_UserBlockingPriority=2,S.unstable_cancelCallback=function(F){F.callback=null},S.unstable_continueExecution=function(){Ie||Se||(Ie=!0,Y(Te))},S.unstable_getCurrentPriorityLevel=function(){return fe},S.unstable_getFirstCallbackNode=function(){return N(Z)},S.unstable_next=function(F){switch(fe){case 1:case 2:case 3:var X=3;break;default:X=fe}var ye=fe;fe=X;try{return F()}finally{fe=ye}},S.unstable_pauseExecution=function(){},S.unstable_requestPaint=Ae,S.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ye=fe;fe=F;try{return X()}finally{fe=ye}},S.unstable_scheduleCallback=function(F,X,ye){var g=S.unstable_now();if(typeof ye=="object"&&ye!==null){var P=ye.delay;P=typeof P=="number"&&0<P?g+P:g,ye=typeof ye.timeout=="number"?ye.timeout:tt(F)}else ye=tt(F),P=g;return ye=P+ye,F={id:ie++,callback:X,priorityLevel:F,startTime:P,expirationTime:ye,sortIndex:-1},P>g?(F.sortIndex=P,V(ue,F),N(Z)===null&&F===N(ue)&&(Be?ee():Be=!0,J(Me,P-g))):(F.sortIndex=ye,V(Z,F),Ie||Se||(Ie=!0,Y(Te))),F},S.unstable_shouldYield=function(){var F=S.unstable_now();Ze(F);var X=N(Z);return X!==re&&re!==null&&X!==null&&X.callback!==null&&X.startTime<=F&&X.expirationTime<re.expirationTime||I()},S.unstable_wrapCallback=function(F){var X=fe;return function(){var ye=fe;fe=X;try{return F.apply(this,arguments)}finally{fe=ye}}}},3840:(D,S,Y)=>{"use strict";D.exports=Y(53)},3379:(D,S,Y)=>{"use strict";var J=l(function(){var K;return l(function(){return typeof K=="undefined"&&(K=Boolean(window&&document&&document.all&&!window.atob)),K},"memorize")},"isOldIE")(),ee=l(function(){var K={};return l(function(M){if(typeof K[M]=="undefined"){var E=document.querySelector(M);if(window.HTMLIFrameElement&&E instanceof window.HTMLIFrameElement)try{E=E.contentDocument.head}catch(_){E=null}K[M]=E}return K[M]},"memorize")},"getTarget")(),I=[];function y(j){for(var K=-1,de=0;de<I.length;de++)if(I[de].identifier===j){K=de;break}return K}l(y,"getIndexByIdentifier");function h(j,K){for(var de={},M=[],E=0;E<j.length;E++){var _=j[E],q=K.base?_[0]+K.base:_[0],R=de[q]||0,V="".concat(q," ").concat(R);de[q]=R+1;var N=y(V),A={css:_[1],media:_[2],sourceMap:_[3]};N!==-1?(I[N].references++,I[N].updater(A)):I.push({identifier:V,updater:Pe(A,K),references:1}),M.push(V)}return M}l(h,"modulesToDom");function H(j){var K=document.createElement("style"),de=j.attributes||{};if(typeof de.nonce=="undefined"){var M=Y.nc;M&&(de.nonce=M)}if(Object.keys(de).forEach(function(_){K.setAttribute(_,de[_])}),typeof j.insert=="function")j.insert(K);else{var E=ee(j.insert||"head");if(!E)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");E.appendChild(K)}return K}l(H,"insertStyleElement");function z(j){if(j.parentNode===null)return!1;j.parentNode.removeChild(j)}l(z,"removeStyleElement");var W=l(function(){var K=[];return l(function(M,E){return K[M]=E,K.filter(Boolean).join(`
`)},"replace")},"replaceText")();function s(j,K,de,M){var E=de?"":M.media?"@media ".concat(M.media," {").concat(M.css,"}"):M.css;if(j.styleSheet)j.styleSheet.cssText=W(K,E);else{var _=document.createTextNode(E),q=j.childNodes;q[K]&&j.removeChild(q[K]),q.length?j.insertBefore(_,q[K]):j.appendChild(_)}}l(s,"applyToSingletonTag");function ne(j,K,de){var M=de.css,E=de.media,_=de.sourceMap;if(E?j.setAttribute("media",E):j.removeAttribute("media"),_&&typeof btoa!="undefined"&&(M+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),j.styleSheet)j.styleSheet.cssText=M;else{for(;j.firstChild;)j.removeChild(j.firstChild);j.appendChild(document.createTextNode(M))}}l(ne,"applyToTag");var te=null,De=0;function Pe(j,K){var de,M,E;if(K.singleton){var _=De++;de=te||(te=H(K)),M=s.bind(null,de,_,!1),E=s.bind(null,de,_,!0)}else de=H(K),M=ne.bind(null,de,K),E=l(function(){z(de)},"remove");return M(j),l(function(R){if(R){if(R.css===j.css&&R.media===j.media&&R.sourceMap===j.sourceMap)return;M(j=R)}else E()},"updateStyle")}l(Pe,"addStyle"),D.exports=function(j,K){K=K||{},!K.singleton&&typeof K.singleton!="boolean"&&(K.singleton=J()),j=j||[];var de=h(j,K);return l(function(E){if(E=E||[],Object.prototype.toString.call(E)==="[object Array]"){for(var _=0;_<de.length;_++){var q=de[_],R=y(q);I[R].references--}for(var V=h(E,K),N=0;N<de.length;N++){var A=de[N],$=y(A);I[$].references===0&&(I[$].updater(),I.splice($,1))}de=V}},"update")}},1828:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.12 13.9725L15 12.5L9.37924 2H7.61921L1.99847 12.5L2.87849 13.9725H14.12ZM2.87849 12.9725L8.49922 2.47249L14.12 12.9725H2.87849ZM7.98949 6H8.98799V10H7.98949V6ZM7.98949 11H8.98799V12H7.98949V11Z" fill="#C5C5C5"></path></svg>'},6305:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_818_123307)"><path d="M16 7.99201C16 3.58042 12.416 0 8 0C3.584 0 0 3.58042 0 7.99201C0 10.4216 1.104 12.6114 2.832 14.0819C2.848 14.0979 2.864 14.0979 2.864 14.1139C3.008 14.2258 3.152 14.3377 3.312 14.4496C3.392 14.4975 3.456 14.5614 3.536 14.6254C4.816 15.4885 6.352 16 8.016 16C9.68 16 11.216 15.4885 12.496 14.6254C12.576 14.5774 12.64 14.5135 12.72 14.4655C12.864 14.3536 13.024 14.2418 13.168 14.1299C13.184 14.1139 13.2 14.1139 13.2 14.0979C14.896 12.6114 16 10.4216 16 7.99201ZM8 14.993C6.496 14.993 5.12 14.5135 3.984 13.7143C4 13.5864 4.032 13.4585 4.064 13.3307C4.16 12.979 4.304 12.6434 4.48 12.3397C4.656 12.036 4.864 11.7642 5.12 11.5245C5.36 11.2847 5.648 11.0609 5.936 10.8851C6.24 10.7093 6.56 10.5814 6.912 10.4855C7.264 10.3896 7.632 10.3417 8 10.3417C8.592 10.3417 9.136 10.4535 9.632 10.6613C10.128 10.8691 10.56 11.1568 10.928 11.5085C11.296 11.8761 11.584 12.3077 11.792 12.8032C11.904 13.0909 11.984 13.3946 12.032 13.7143C10.88 14.5135 9.504 14.993 8 14.993ZM5.552 7.59241C5.408 7.27273 5.344 6.92108 5.344 6.56943C5.344 6.21778 5.408 5.86613 5.552 5.54645C5.696 5.22677 5.888 4.93906 6.128 4.6993C6.368 4.45954 6.656 4.26773 6.976 4.12388C7.296 3.98002 7.648 3.91608 8 3.91608C8.368 3.91608 8.704 3.98002 9.024 4.12388C9.344 4.26773 9.632 4.45954 9.872 4.6993C10.112 4.93906 10.304 5.22677 10.448 5.54645C10.592 5.86613 10.656 6.21778 10.656 6.56943C10.656 6.93706 10.592 7.27273 10.448 7.59241C10.304 7.91209 10.112 8.1998 9.872 8.43956C9.632 8.67932 9.344 8.87113 9.024 9.01499C8.384 9.28671 7.6 9.28671 6.96 9.01499C6.64 8.87113 6.352 8.67932 6.112 8.43956C5.872 8.1998 5.68 7.91209 5.552 7.59241ZM12.976 12.8991C12.976 12.8671 12.96 12.8511 12.96 12.8192C12.8 12.3237 12.576 11.8442 12.272 11.4126C11.968 10.981 11.616 10.5974 11.184 10.2777C10.864 10.038 10.512 9.83017 10.144 9.67033C10.32 9.55844 10.48 9.41459 10.608 9.28671C10.848 9.04695 11.056 8.79121 11.232 8.5035C11.408 8.21578 11.536 7.91209 11.632 7.57642C11.728 7.24076 11.76 6.90509 11.76 6.56943C11.76 6.04196 11.664 5.54645 11.472 5.0989C11.28 4.65135 11.008 4.25175 10.656 3.9001C10.32 3.56444 9.904 3.29271 9.456 3.1009C9.008 2.90909 8.512 2.81319 7.984 2.81319C7.456 2.81319 6.96 2.90909 6.512 3.1009C6.064 3.29271 5.648 3.56444 5.312 3.91608C4.976 4.25175 4.704 4.66733 4.512 5.11489C4.32 5.56244 4.224 6.05794 4.224 6.58541C4.224 6.93706 4.272 7.27273 4.368 7.59241C4.464 7.92807 4.592 8.23177 4.768 8.51948C4.928 8.80719 5.152 9.06294 5.392 9.3027C5.536 9.44655 5.696 9.57443 5.872 9.68631C5.488 9.86214 5.136 10.0699 4.832 10.3097C4.416 10.6294 4.048 11.013 3.744 11.4286C3.44 11.8601 3.216 12.3237 3.056 12.8352C3.04 12.8671 3.04 12.8991 3.04 12.9151C1.776 11.6364 0.992 9.91009 0.992 7.99201C0.992 4.13986 4.144 0.991009 8 0.991009C11.856 0.991009 15.008 4.13986 15.008 7.99201C15.008 9.91009 14.224 11.6364 12.976 12.8991Z" fill="#C5C5C5"></path></g><defs><clipPath id="clip0_818_123307"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>'},8060:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" fill="#C5C5C5"></path></svg>'},3274:D=>{D.exports='<svg viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z" fill="#C5C5C5"></path></svg>'},7943:D=>{D.exports='<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.97612 10.0719L12.3334 5.7146L12.9521 6.33332L8.28548 11L7.66676 11L3.0001 6.33332L3.61882 5.7146L7.97612 10.0719Z"></path></svg>'},4933:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 8.70711L11.6464 12.3536L12.3535 11.6464L8.70708 8L12.3535 4.35355L11.6464 3.64645L7.99998 7.29289L4.35353 3.64645L3.64642 4.35355L7.29287 8L3.64642 11.6464L4.35353 12.3536L7.99998 8.70711Z" fill="#C5C5C5"></path></svg>'},2651:D=>{D.exports='<svg viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>'},832:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52 0H8.48V4.05333C9.47556 4.16 10.3111 4.58667 10.9867 5.33333C11.6622 6.08 12 6.96889 12 8C12 9.03111 11.6622 9.92 10.9867 10.6667C10.3111 11.4133 9.47556 11.84 8.48 11.9467V16H7.52V11.9467C6.52444 11.84 5.68889 11.4133 5.01333 10.6667C4.33778 9.92 4 9.03111 4 8C4 6.96889 4.33778 6.08 5.01333 5.33333C5.68889 4.58667 6.52444 4.16 7.52 4.05333V0ZM8 10.6133C8.71111 10.6133 9.31556 10.3644 9.81333 9.86667C10.3467 9.33333 10.6133 8.71111 10.6133 8C10.6133 7.28889 10.3467 6.68444 9.81333 6.18667C9.31556 5.65333 8.71111 5.38667 8 5.38667C7.28889 5.38667 6.66667 5.65333 6.13333 6.18667C5.63556 6.68444 5.38667 7.28889 5.38667 8C5.38667 8.71111 5.63556 9.33333 6.13333 9.86667C6.66667 10.3644 7.28889 10.6133 8 10.6133Z" fill="#A0A0A0"></path></svg>'},2776:D=>{D.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg>'},2190:D=>{D.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:evenodd;fill:#FFFFFF;fill-opacity:1;" d="M 14 0 C 6.265625 0 0 6.265625 0 14 C 0 20.195312 4.007812 25.425781 9.574219 27.285156 C 10.273438 27.402344 10.535156 26.984375 10.535156 26.617188 C 10.535156 26.285156 10.515625 25.183594 10.515625 24.011719 C 7 24.660156 6.089844 23.152344 5.808594 22.363281 C 5.652344 21.960938 4.972656 20.722656 4.375 20.386719 C 3.886719 20.125 3.183594 19.476562 4.359375 19.460938 C 5.460938 19.441406 6.246094 20.476562 6.511719 20.894531 C 7.769531 23.011719 9.785156 22.417969 10.585938 22.050781 C 10.710938 21.140625 11.078125 20.527344 11.480469 20.175781 C 8.363281 19.828125 5.109375 18.621094 5.109375 13.265625 C 5.109375 11.742188 5.652344 10.484375 6.546875 9.503906 C 6.402344 9.152344 5.914062 7.714844 6.683594 5.792969 C 6.683594 5.792969 7.859375 5.425781 10.535156 7.226562 C 11.652344 6.914062 12.847656 6.753906 14.035156 6.753906 C 15.226562 6.753906 16.414062 6.914062 17.535156 7.226562 C 20.210938 5.410156 21.386719 5.792969 21.386719 5.792969 C 22.152344 7.714844 21.664062 9.152344 21.523438 9.503906 C 22.417969 10.484375 22.960938 11.726562 22.960938 13.265625 C 22.960938 18.636719 19.6875 19.828125 16.574219 20.175781 C 17.078125 20.613281 17.515625 21.453125 17.515625 22.765625 C 17.515625 24.640625 17.5 26.144531 17.5 26.617188 C 17.5 26.984375 17.761719 27.421875 18.460938 27.285156 C 24.160156 25.359375 27.996094 20.015625 28 14 C 28 6.265625 21.734375 0 14 0 Z M 14 0 "></path></g></svg>'},3879:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z" fill="#cccccc"></path></svg>'},1343:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4C8.35556 4 8.71111 4.05333 9.06667 4.16C9.74222 4.33778 10.3289 4.67556 10.8267 5.17333C11.3244 5.67111 11.6622 6.25778 11.84 6.93333C11.9467 7.28889 12 7.64444 12 8C12 8.35556 11.9467 8.71111 11.84 9.06667C11.6622 9.74222 11.3244 10.3289 10.8267 10.8267C10.3289 11.3244 9.74222 11.6622 9.06667 11.84C8.71111 11.9467 8.35556 12 8 12C7.64444 12 7.28889 11.9467 6.93333 11.84C6.25778 11.6622 5.67111 11.3244 5.17333 10.8267C4.67556 10.3289 4.33778 9.74222 4.16 9.06667C4.05333 8.71111 4 8.35556 4 8C4 7.64444 4.03556 7.30667 4.10667 6.98667C4.21333 6.63111 4.35556 6.29333 4.53333 5.97333C4.88889 5.36889 5.36889 4.88889 5.97333 4.53333C6.29333 4.35556 6.61333 4.23111 6.93333 4.16C7.28889 4.05333 7.64444 4 8 4Z" fill="#CCCCCC"></path></svg>'},4364:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.40706 15L1 13.5929L3.35721 9.46781L3.52339 9.25025L11.7736 1L13.2321 1L15 2.76791V4.22636L6.74975 12.4766L6.53219 12.6428L2.40706 15ZM2.40706 13.5929L6.02053 11.7474L14.2708 3.49714L12.5029 1.72923L4.25262 9.97947L2.40706 13.5929Z" fill="#C5C5C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.64642 12.3536L3.64642 10.3536L4.35353 9.64645L6.35353 11.6464L5.64642 12.3536Z" fill="#C5C5C5"></path></svg>'},5720:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1 4.4L8.6 2H7.4L6.9 4.4L6.2 4.7L4.2 3.4L3.3 4.2L4.6 6.2L4.4 6.9L2 7.4V8.6L4.4 9.1L4.7 9.9L3.4 11.9L4.2 12.7L6.2 11.4L7 11.7L7.4 14H8.6L9.1 11.6L9.9 11.3L11.9 12.6L12.7 11.8L11.4 9.8L11.7 9L14 8.6V7.4L11.6 6.9L11.3 6.1L12.6 4.1L11.8 3.3L9.8 4.6L9.1 4.4ZM9.4 1L9.9 3.4L12 2.1L14 4.1L12.6 6.2L15 6.6V9.4L12.6 9.9L14 12L12 14L9.9 12.6L9.4 15H6.6L6.1 12.6L4 13.9L2 11.9L3.4 9.8L1 9.4V6.6L3.4 6.1L2.1 4L4.1 2L6.2 3.4L6.6 1H9.4ZM10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8ZM8 9C8.6 9 9 8.6 9 8C9 7.4 8.6 7 8 7C7.4 7 7 7.4 7 8C7 8.6 7.4 9 8 9Z" fill="#C5C5C5"></path></svg>'},9553:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.00012 13H7.00012L7.00012 7.00001L13.0001 7.00001V6.00001L7.00012 6.00001L7.00012 3H6.00012L6.00012 6.00001L3.00012 6.00001V7.00001H6.00012L6.00012 13Z" fill="#C5C5C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.50012 2H13.5001L14.0001 2.5V13.5L13.5001 14H2.50012L2.00012 13.5V2.5L2.50012 2ZM3.00012 13H13.0001V3H3.00012V13Z" fill="#C5C5C5"></path></svg>'},1608:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2002 2H8.01724L7.66424 2.146L1.00024 8.81V9.517L6.18324 14.7H6.89024L9.10531 12.4853C9.65832 12.7768 10.2677 12.9502 10.8945 12.9923C11.659 13.0437 12.424 12.8981 13.1162 12.5694C13.8085 12.2407 14.4048 11.74 14.8483 11.1151C15.2918 10.4902 15.5676 9.76192 15.6492 9H15.6493C15.6759 8.83446 15.6929 8.66751 15.7003 8.5C15.6989 7.30693 15.2244 6.16311 14.3808 5.31948C14.1712 5.10988 13.9431 4.92307 13.7002 4.76064V2.5L13.2002 2ZM12.7002 4.25881C12.223 4.08965 11.7162 4.00057 11.2003 4C11.0676 4 10.9405 4.05268 10.8467 4.14645C10.7529 4.24021 10.7003 4.36739 10.7003 4.5C10.7003 4.63261 10.7529 4.75979 10.8467 4.85355C10.9405 4.94732 11.0676 5 11.2003 5C11.7241 5 12.2358 5.11743 12.7002 5.33771V7.476L8.77506 11.4005C8.75767 11.4095 8.74079 11.4194 8.72449 11.4304C8.6685 11.468 8.6207 11.5166 8.58397 11.5731C8.57475 11.5874 8.56627 11.602 8.55856 11.617L6.53624 13.639L2.06124 9.163L8.22424 3H12.7002V4.25881ZM13.7002 6.0505C14.3409 6.70435 14.7003 7.58365 14.7003 8.5C14.6955 8.66769 14.6784 8.8348 14.6493 9H14.6492C14.5675 9.58097 14.3406 10.1319 13.9894 10.6019C13.6383 11.0719 13.1743 11.4457 12.6403 11.6888C12.1063 11.9319 11.5197 12.0363 10.9346 11.9925C10.5622 11.9646 10.1982 11.8772 9.85588 11.7348L13.5542 8.037L13.7002 7.683V6.0505Z" fill="#C5C5C5"></path></svg>'},6589:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99008 1C4.5965 1 4.21175 1.11671 3.8845 1.33538C3.55724 1.55404 3.30218 1.86484 3.15156 2.22846C3.00094 2.59208 2.96153 2.99221 3.03832 3.37823C3.1151 3.76425 3.30463 4.11884 3.58294 4.39714C3.83589 4.65009 4.15185 4.8297 4.49715 4.91798L4.49099 10.8286C4.40192 10.8517 4.31421 10.881 4.22852 10.9165C3.8649 11.0671 3.5541 11.3222 3.33544 11.6494C3.11677 11.9767 3.00006 12.3614 3.00006 12.755C3.00006 13.2828 3.20972 13.7889 3.58292 14.1621C3.95612 14.5353 4.46228 14.745 4.99006 14.745C5.38365 14.745 5.76839 14.6283 6.09565 14.4096C6.4229 14.191 6.67796 13.8802 6.82858 13.5165C6.9792 13.1529 7.01861 12.7528 6.94182 12.3668C6.86504 11.9807 6.67551 11.6262 6.3972 11.3479C6.14426 11.0949 5.8283 10.9153 5.48299 10.827V9.745H5.48915V8.80133C6.50043 10.3332 8.19531 11.374 10.1393 11.4893C10.2388 11.7413 10.3893 11.9714 10.5825 12.1648C10.8608 12.4432 11.2154 12.6328 11.6014 12.7097C11.9875 12.7866 12.3877 12.7472 12.7513 12.5966C13.115 12.446 13.4259 12.191 13.6446 11.8637C13.8633 11.5364 13.98 11.1516 13.98 10.758C13.98 10.2304 13.7705 9.72439 13.3975 9.35122C13.0245 8.97805 12.5186 8.76827 11.991 8.76801C11.5974 8.76781 11.2126 8.88435 10.8852 9.10289C10.5578 9.32144 10.3026 9.63216 10.1518 9.99577C10.0875 10.1509 10.0434 10.3127 10.0199 10.4772C7.48375 10.2356 5.48915 8.09947 5.48915 5.5C5.48915 5.33125 5.47282 5.16445 5.48915 5V4.9164C5.57823 4.89333 5.66594 4.86401 5.75162 4.82852C6.11525 4.6779 6.42604 4.42284 6.64471 4.09558C6.86337 3.76833 6.98008 3.38358 6.98008 2.99C6.98008 2.46222 6.77042 1.95605 6.39722 1.58286C6.02403 1.20966 5.51786 1 4.99008 1ZM4.99008 2C5.18593 1.9998 5.37743 2.0577 5.54037 2.16636C5.70331 2.27502 5.83035 2.42957 5.90544 2.61045C5.98052 2.79133 6.00027 2.99042 5.96218 3.18253C5.9241 3.37463 5.82989 3.55113 5.69147 3.68968C5.55306 3.82824 5.37666 3.92262 5.18459 3.9609C4.99252 3.99918 4.79341 3.97964 4.61246 3.90474C4.4315 3.82983 4.27682 3.70294 4.168 3.54012C4.05917 3.37729 4.00108 3.18585 4.00108 2.99C4.00135 2.72769 4.1056 2.47618 4.29098 2.29061C4.47637 2.10503 4.72777 2.00053 4.99008 2ZM4.99006 13.745C4.79422 13.7452 4.60271 13.6873 4.43977 13.5786C4.27684 13.47 4.14979 13.3154 4.07471 13.1345C3.99962 12.9537 3.97988 12.7546 4.01796 12.5625C4.05605 12.3704 4.15026 12.1939 4.28867 12.0553C4.42709 11.9168 4.60349 11.8224 4.79555 11.7841C4.98762 11.7458 5.18673 11.7654 5.36769 11.8403C5.54864 11.9152 5.70332 12.0421 5.81215 12.2049C5.92097 12.3677 5.97906 12.5591 5.97906 12.755C5.9788 13.0173 5.87455 13.2688 5.68916 13.4544C5.50377 13.64 5.25237 13.7445 4.99006 13.745ZM11.991 9.76801C12.1868 9.76801 12.3782 9.82607 12.541 9.93485C12.7038 10.0436 12.8307 10.1983 12.9057 10.3791C12.9806 10.56 13.0002 10.7591 12.962 10.9511C12.9238 11.1432 12.8295 11.3196 12.6911 11.458C12.5526 11.5965 12.3762 11.6908 12.1842 11.729C11.9921 11.7672 11.7931 11.7476 11.6122 11.6726C11.4313 11.5977 11.2767 11.4708 11.1679 11.308C11.0591 11.1452 11.001 10.9538 11.001 10.758C11.0013 10.4955 11.1057 10.2439 11.2913 10.0583C11.4769 9.87266 11.7285 9.76827 11.991 9.76801Z" fill="#C5C5C5"></path></svg>'},1144:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5002 4.64639L8.35388 2.5H7.64677L5.50034 4.64639L6.20744 5.35349L7.3003 4.26066V5.27972H7.28082V5.73617L7.30568 5.73717C7.30768 5.84794 7.30968 5.95412 7.31169 6.05572C7.31538 6.24322 7.33201 6.43462 7.36158 6.62994C7.39114 6.82525 7.42994 7.02056 7.47799 7.21587C7.52603 7.41119 7.59255 7.62017 7.67755 7.84283C7.83276 8.22173 8.02124 8.56548 8.24297 8.87408C8.4647 9.18267 8.70307 9.47173 8.95806 9.74127C9.21306 10.0108 9.46621 10.2764 9.71751 10.5381C9.9688 10.7999 10.1961 11.0792 10.3993 11.376C10.6026 11.6729 10.767 11.9971 10.8927 12.3487C11.0183 12.7002 11.0812 13.1045 11.0812 13.5616V14.4463H12.5003V13.5616C12.4929 13.042 12.4375 12.5792 12.334 12.1729C12.2305 11.7667 12.0882 11.3995 11.9071 11.0713C11.7261 10.7432 11.5246 10.4444 11.3029 10.1749C11.0812 9.90533 10.8502 9.64752 10.61 9.40142C10.3698 9.15533 10.1388 8.90923 9.91707 8.66314C9.69533 8.41705 9.49392 8.15533 9.31284 7.87798C9.13176 7.60064 8.98763 7.29595 8.88046 6.96392C8.77329 6.63189 8.7197 6.25494 8.7197 5.83306V5.27972H8.71901V4.27935L9.79314 5.3535L10.5002 4.64639ZM7.04245 9.74127C7.15517 9.62213 7.26463 9.49917 7.37085 9.3724C7.12665 9.01878 6.92109 8.63423 6.75218 8.22189L6.74317 8.19952C6.70951 8.11134 6.67794 8.02386 6.6486 7.93713C6.47774 8.19261 6.28936 8.43461 6.08345 8.66314C5.86172 8.90923 5.63074 9.15533 5.39053 9.40142C5.15032 9.64752 4.91935 9.90533 4.69761 10.1749C4.47588 10.4444 4.27447 10.7432 4.09338 11.0713C3.9123 11.3995 3.77002 11.7667 3.66654 12.1729C3.56307 12.5792 3.50764 13.042 3.50024 13.5616V14.4463H4.91935V13.5616C4.91935 13.1045 4.98217 12.7002 5.10782 12.3487C5.23347 11.9971 5.39792 11.6729 5.60118 11.376C5.80444 11.0792 6.03171 10.7999 6.28301 10.5381C6.53431 10.2764 6.78746 10.0108 7.04245 9.74127Z" fill="#424242"></path></svg>'},1922:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99976 1H6.99976V3H1.49976L0.999756 3.5V7.5L1.49976 8H6.99976V15H7.99976V8H12.4898L12.8298 7.87L15.0098 5.87V5.13L12.8298 3.13L12.4998 3H7.99976V1ZM12.2898 7H1.99976V4H12.2898L13.9198 5.5L12.2898 7ZM4.99976 5H9.99976V6H4.99976V5Z" fill="#C5C5C5"></path></svg>'},3476:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7V8H8V14H7V8H1V7H7V1H8V7H14Z" fill="#C5C5C5"></path></svg>'},5143:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.616 4.928a2.487 2.487 0 0 1-1.119.922c-.148.06-.458.138-.458.138v5.008a2.51 2.51 0 0 1 1.579 1.062c.273.412.419.895.419 1.388.008.343-.057.684-.19 1A2.485 2.485 0 0 1 3.5 15.984a2.482 2.482 0 0 1-1.388-.419A2.487 2.487 0 0 1 1.05 13c.095-.486.331-.932.68-1.283.349-.343.79-.579 1.269-.68V5.949a2.6 2.6 0 0 1-1.269-.68 2.503 2.503 0 0 1-.68-1.283 2.487 2.487 0 0 1 1.06-2.565A2.49 2.49 0 0 1 3.5 1a2.504 2.504 0 0 1 1.807.729 2.493 2.493 0 0 1 .729 1.81c.002.494-.144.978-.42 1.389zm-.756 7.861a1.5 1.5 0 0 0-.552-.579 1.45 1.45 0 0 0-.77-.21 1.495 1.495 0 0 0-1.47 1.79 1.493 1.493 0 0 0 1.18 1.179c.288.058.586.03.86-.08.276-.117.512-.312.68-.56.15-.226.235-.49.249-.76a1.51 1.51 0 0 0-.177-.78zM2.708 4.741c.247.161.536.25.83.25.271 0 .538-.075.77-.211a1.514 1.514 0 0 0 .729-1.359 1.513 1.513 0 0 0-.25-.76 1.551 1.551 0 0 0-.68-.56 1.49 1.49 0 0 0-.86-.08 1.494 1.494 0 0 0-1.179 1.18c-.058.288-.03.586.08.86.117.276.312.512.56.68zm10.329 6.296c.48.097.922.335 1.269.68.466.47.729 1.107.725 1.766.002.493-.144.977-.42 1.388a2.499 2.499 0 0 1-4.532-.899 2.5 2.5 0 0 1 1.067-2.565c.267-.183.571-.308.889-.37V5.489a1.5 1.5 0 0 0-1.5-1.499H8.687l1.269 1.27-.71.709L7.117 3.84v-.7l2.13-2.13.71.711-1.269 1.27h1.85a2.484 2.484 0 0 1 2.312 1.541c.125.302.189.628.187.957v5.548zm.557 3.509a1.493 1.493 0 0 0 .191-1.89 1.552 1.552 0 0 0-.68-.559 1.49 1.49 0 0 0-.86-.08 1.493 1.493 0 0 0-1.179 1.18 1.49 1.49 0 0 0 .08.86 1.496 1.496 0 0 0 2.448.49z"></path></svg>'},7602:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.38893 12.9906L6.11891 11.7205L6.78893 11.0206L8.91893 13.1506V13.8505L6.78893 15.9805L6.07893 15.2706L7.34892 14.0006H5.49892C5.17024 14.0019 4.84458 13.9381 4.54067 13.8129C4.23675 13.6878 3.96061 13.5037 3.7282 13.2713C3.49579 13.0389 3.31171 12.7627 3.18654 12.4588C3.06137 12.1549 2.99759 11.8292 2.99892 11.5006V5.95052C2.5198 5.84851 2.07944 5.61279 1.72893 5.27059C1.3808 4.91884 1.14393 4.47238 1.0479 3.98689C0.951867 3.50141 1.00092 2.9984 1.18892 2.54061C1.37867 2.08436 1.69938 1.69458 2.11052 1.42049C2.52166 1.14639 3.00479 1.00024 3.49892 1.00057C3.84188 0.993194 4.18256 1.05787 4.49892 1.19051C4.80197 1.31518 5.07732 1.49871 5.30904 1.73042C5.54075 1.96214 5.72425 2.23755 5.84892 2.54061C5.98157 2.85696 6.0463 3.19765 6.03893 3.54061C6.03926 4.03474 5.89316 4.51789 5.61906 4.92903C5.34497 5.34017 4.95516 5.6608 4.49892 5.85054C4.35057 5.91224 4.19649 5.95915 4.03893 5.99056V11.4906C4.03893 11.8884 4.19695 12.2699 4.47826 12.5512C4.75956 12.8325 5.1411 12.9906 5.53893 12.9906H7.38893ZM2.70894 4.74056C2.95497 4.90376 3.24368 4.99072 3.53893 4.99056C3.81026 4.99066 4.07654 4.91718 4.3094 4.77791C4.54227 4.63864 4.73301 4.43877 4.86128 4.19966C4.98956 3.96056 5.05057 3.69116 5.03783 3.42012C5.02508 3.14908 4.93907 2.88661 4.78893 2.6606C4.62119 2.4121 4.38499 2.21751 4.10893 2.10054C3.83645 1.98955 3.53719 1.96176 3.24892 2.02059C2.95693 2.07705 2.68852 2.2196 2.47823 2.42989C2.26793 2.64018 2.12539 2.90853 2.06892 3.20052C2.0101 3.4888 2.03792 3.78802 2.14891 4.0605C2.26588 4.33656 2.46043 4.57282 2.70894 4.74056ZM13.0389 11.0406C13.5196 11.1384 13.9612 11.3747 14.309 11.7206C14.7766 12.191 15.039 12.8273 15.0389 13.4906C15.0393 13.9847 14.8932 14.4679 14.6191 14.879C14.345 15.2902 13.9552 15.6109 13.499 15.8007C13.0416 15.9915 12.5378 16.0421 12.0516 15.946C11.5654 15.85 11.1187 15.6117 10.7683 15.2612C10.4179 14.9108 10.1795 14.4641 10.0835 13.9779C9.98746 13.4917 10.0381 12.988 10.2289 12.5306C10.4218 12.0768 10.7412 11.688 11.1489 11.4106C11.4177 11.2286 11.7204 11.1028 12.0389 11.0406V5.4906C12.0389 5.09278 11.8809 4.71124 11.5996 4.42993C11.3183 4.14863 10.9368 3.9906 10.5389 3.9906H8.68896L9.95892 5.26062L9.24896 5.97058L7.11893 3.84058V3.14063L9.24896 1.01062L9.95892 1.72058L8.68896 2.9906H10.5389C10.8676 2.98928 11.1933 3.05305 11.4972 3.17822C11.8011 3.30339 12.0772 3.48744 12.3096 3.71985C12.542 3.95226 12.7262 4.22844 12.8513 4.53235C12.9765 4.83626 13.0403 5.16193 13.0389 5.4906V11.0406ZM12.6879 14.9829C13.0324 14.9483 13.3542 14.7956 13.5989 14.5507C13.8439 14.306 13.9966 13.984 14.0313 13.6395C14.0659 13.295 13.9803 12.9492 13.7889 12.6606C13.6212 12.4121 13.385 12.2176 13.1089 12.1006C12.8365 11.9896 12.5372 11.9618 12.249 12.0206C11.957 12.0771 11.6886 12.2196 11.4783 12.4299C11.268 12.6402 11.1254 12.9086 11.069 13.2006C11.0101 13.4888 11.0379 13.7881 11.1489 14.0605C11.2659 14.3366 11.4604 14.5729 11.7089 14.7406C11.9975 14.9319 12.3434 15.0175 12.6879 14.9829Z" fill="#C5C5C5"></path></svg>'},6307:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.61594 4.92769C5.34304 5.33899 4.95319 5.66062 4.49705 5.8497C4.34891 5.91013 4.03897 5.9881 4.03897 5.9881V10.9958C4.19686 11.027 4.35086 11.0738 4.499 11.1362C4.95513 11.3272 5.34304 11.6469 5.61789 12.0582C5.89079 12.4695 6.03699 12.9529 6.03699 13.4461C6.04478 13.7891 5.98046 14.1303 5.84791 14.446C5.72315 14.7482 5.53992 15.023 5.30796 15.255C5.07794 15.487 4.80114 15.6702 4.499 15.7949C4.18322 15.9275 3.84209 15.9918 3.49902 15.984C3.00585 15.986 2.52243 15.8398 2.11113 15.5649C1.69983 15.292 1.3782 14.9022 1.18912 14.446C1.00198 13.988 0.953253 13.485 1.04877 12.9997C1.14428 12.5143 1.38015 12.0679 1.72907 11.717C2.07799 11.374 2.51853 11.1381 2.99805 11.0367V5.94911C2.52048 5.8458 2.07994 5.61189 1.72907 5.26881C1.38015 4.91794 1.14428 4.47155 1.04877 3.98618C0.951304 3.50081 1.00004 2.99789 1.18912 2.53981C1.3782 2.08368 1.69983 1.69382 2.11113 1.42092C2.52048 1.14607 3.0039 0.999877 3.49902 0.999877C3.84014 0.99403 4.18127 1.05836 4.49705 1.18896C4.79919 1.31371 5.07404 1.49695 5.30601 1.72891C5.53797 1.96087 5.7212 2.23767 5.84596 2.53981C5.97851 2.8556 6.04284 3.19672 6.03504 3.5398C6.03699 4.03296 5.89079 4.51639 5.61594 4.92769ZM4.85962 12.7892C4.73097 12.5494 4.53994 12.3486 4.30797 12.2102C4.07601 12.0699 3.80896 11.9958 3.538 11.9997C3.24171 11.9997 2.95322 12.0855 2.70761 12.2492C2.46005 12.4168 2.26512 12.6527 2.14816 12.9295C2.03706 13.2024 2.00977 13.5006 2.06824 13.7891C2.12477 14.0796 2.26707 14.3486 2.47759 14.5591C2.68812 14.7696 2.95517 14.9119 3.24756 14.9685C3.53606 15.0269 3.8343 14.9996 4.1072 14.8885C4.38399 14.7716 4.61986 14.5766 4.7875 14.3291C4.93759 14.103 5.02336 13.8398 5.037 13.5689C5.0487 13.2979 4.98827 13.0289 4.85962 12.7892ZM2.70761 4.74056C2.95517 4.90235 3.24366 4.99006 3.538 4.99006C3.80896 4.99006 4.07601 4.91599 4.30797 4.77954C4.53994 4.63919 4.73097 4.44037 4.85962 4.2006C4.98827 3.96084 5.05065 3.69184 5.037 3.42089C5.02336 3.14994 4.93759 2.88679 4.7875 2.66067C4.61986 2.41311 4.38399 2.21818 4.1072 2.10122C3.8343 1.99011 3.53606 1.96282 3.24756 2.0213C2.95712 2.07783 2.68812 2.22013 2.47759 2.43065C2.26707 2.64118 2.12477 2.90823 2.06824 3.20062C2.00977 3.48911 2.03706 3.78735 2.14816 4.06025C2.26512 4.33705 2.46005 4.57292 2.70761 4.74056ZM13.0368 11.0368C13.5164 11.1342 13.9588 11.372 14.3058 11.7171C14.7717 12.1868 15.0348 12.8243 15.0309 13.4831C15.0329 13.9763 14.8867 14.4597 14.6119 14.871C14.339 15.2823 13.9491 15.6039 13.493 15.793C13.0368 15.984 12.532 16.0347 12.0466 15.9392C11.5612 15.8437 11.1148 15.6059 10.764 15.255C10.415 14.9041 10.1753 14.4578 10.0798 13.9724C9.98425 13.487 10.0349 12.9841 10.226 12.526C10.4189 12.0738 10.7386 11.6839 11.146 11.4071C11.4131 11.2239 11.7172 11.0991 12.0349 11.0368V7.4891H13.0368V11.0368ZM13.5943 14.5455C13.8399 14.3018 13.992 13.9802 14.0271 13.6352C14.0622 13.2921 13.9764 12.9451 13.7854 12.6566C13.6177 12.4091 13.3819 12.2141 13.1051 12.0972C12.8322 11.9861 12.5339 11.9588 12.2454 12.0173C11.955 12.0738 11.686 12.2161 11.4755 12.4266C11.2649 12.6371 11.1226 12.9042 11.0661 13.1966C11.0076 13.4851 11.0349 13.7833 11.146 14.0562C11.263 14.333 11.4579 14.5689 11.7055 14.7365C11.994 14.9275 12.339 15.0133 12.684 14.9782C13.0271 14.9431 13.3507 14.7911 13.5943 14.5455Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6876 3.40036L10 5.088L10.7071 5.7951L12.3947 4.10747L14.0824 5.7951L14.7895 5.088L13.1019 3.40036L14.7895 1.71272L14.0824 1.00562L12.3947 2.69325L10.7071 1.00562L10 1.71272L11.6876 3.40036Z"></path></svg>'},2225:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.49705 5.8497C4.95319 5.66062 5.34304 5.33899 5.61594 4.92769C5.89079 4.51639 6.03699 4.03296 6.03504 3.5398C6.04284 3.19672 5.97851 2.8556 5.84596 2.53981C5.7212 2.23767 5.53797 1.96087 5.30601 1.72891C5.07404 1.49695 4.79919 1.31371 4.49705 1.18896C4.18127 1.05836 3.84014 0.99403 3.49902 0.999877C3.0039 0.999877 2.52048 1.14607 2.11113 1.42092C1.69983 1.69382 1.3782 2.08368 1.18912 2.53981C1.00004 2.99789 0.951304 3.50081 1.04877 3.98618C1.14428 4.47155 1.38015 4.91794 1.72907 5.26881C2.07994 5.61189 2.52048 5.8458 2.99805 5.94911V11.0367C2.51853 11.1381 2.07799 11.374 1.72907 11.717C1.38015 12.0679 1.14428 12.5143 1.04877 12.9997C0.953253 13.485 1.00198 13.988 1.18912 14.446C1.3782 14.9022 1.69983 15.292 2.11113 15.5649C2.52243 15.8398 3.00585 15.986 3.49902 15.984C3.84209 15.9918 4.18322 15.9275 4.499 15.7949C4.80114 15.6702 5.07794 15.487 5.30796 15.255C5.53992 15.023 5.72315 14.7482 5.84791 14.446C5.98046 14.1303 6.04478 13.7891 6.03699 13.4461C6.03699 12.9529 5.89079 12.4695 5.61789 12.0582C5.34304 11.6469 4.95513 11.3272 4.499 11.1362C4.35086 11.0738 4.19686 11.027 4.03897 10.9958V5.9881C4.03897 5.9881 4.34891 5.91013 4.49705 5.8497ZM4.30797 12.2102C4.53994 12.3486 4.73097 12.5494 4.85962 12.7892C4.98827 13.0289 5.0487 13.2979 5.037 13.5689C5.02336 13.8398 4.93759 14.103 4.7875 14.3291C4.61986 14.5766 4.38399 14.7716 4.1072 14.8885C3.8343 14.9996 3.53606 15.0269 3.24756 14.9685C2.95517 14.9119 2.68812 14.7696 2.47759 14.5591C2.26707 14.3486 2.12477 14.0796 2.06824 13.7891C2.00977 13.5006 2.03706 13.2024 2.14816 12.9295C2.26512 12.6527 2.46005 12.4168 2.70761 12.2492C2.95322 12.0855 3.24171 11.9997 3.538 11.9997C3.80896 11.9958 4.07601 12.0699 4.30797 12.2102ZM3.538 4.99006C3.24366 4.99006 2.95517 4.90235 2.70761 4.74056C2.46005 4.57292 2.26512 4.33705 2.14816 4.06025C2.03706 3.78735 2.00977 3.48911 2.06824 3.20062C2.12477 2.90823 2.26707 2.64118 2.47759 2.43065C2.68812 2.22013 2.95712 2.07783 3.24756 2.0213C3.53606 1.96282 3.8343 1.99011 4.1072 2.10122C4.38399 2.21818 4.61986 2.41311 4.7875 2.66067C4.93759 2.88679 5.02336 3.14994 5.037 3.42089C5.05065 3.69184 4.98827 3.96084 4.85962 4.2006C4.73097 4.44037 4.53994 4.63919 4.30797 4.77954C4.07601 4.91599 3.80896 4.99006 3.538 4.99006Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.0543 13.5C15.0543 14.8807 13.935 16 12.5543 16C11.1736 16 10.0543 14.8807 10.0543 13.5C10.0543 12.1193 11.1736 11 12.5543 11C13.935 11 15.0543 12.1193 15.0543 13.5ZM12.5543 15C13.3827 15 14.0543 14.3284 14.0543 13.5C14.0543 12.6716 13.3827 12 12.5543 12C11.7258 12 11.0543 12.6716 11.0543 13.5C11.0543 14.3284 11.7258 15 12.5543 15Z"></path><circle cx="12.5543" cy="7.75073" r="1"></circle><circle cx="12.5543" cy="3.50146" r="1"></circle></svg>'},5140:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.14648 6.3065L6.16649 2.2865L6.87359 2.2865L10.8936 6.3065L10.1865 7.0136L6.97998 3.8071L6.97998 5.69005C6.97998 8.50321 7.58488 10.295 8.70856 11.3953C9.83407 12.4974 11.5857 13.0101 14.13 13.0101L14.48 13.0101L14.48 14.0101L14.13 14.0101C11.4843 14.0101 9.4109 13.4827 8.00891 12.1098C6.60509 10.7351 5.97998 8.61689 5.97998 5.69005L5.97998 3.88722L2.85359 7.01361L2.14648 6.3065Z" fill="#C5C5C5"></path></svg>'},4534:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7099 1.29L13.7099 4.29L13.9999 5V14L12.9999 15H3.99994L2.99994 14V2L3.99994 1H9.99994L10.7099 1.29ZM3.99994 14H12.9999V5L9.99994 2H3.99994V14ZM8 6H6V7H8V9H9V7H11V6H9V4H8V6ZM6 11H11V12H6V11Z"></path></svg>'},4962:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.54883 10.0781C8.00911 10.2604 8.42839 10.502 8.80664 10.8027C9.1849 11.1035 9.50846 11.4521 9.77734 11.8486C10.0462 12.2451 10.2536 12.6712 10.3994 13.127C10.5452 13.5827 10.6204 14.0612 10.625 14.5625V15H9.75V14.5625C9.75 14.0202 9.64746 13.5098 9.44238 13.0312C9.2373 12.5527 8.95475 12.1357 8.59473 11.7803C8.2347 11.4248 7.81771 11.1445 7.34375 10.9395C6.86979 10.7344 6.35938 10.6296 5.8125 10.625C5.27018 10.625 4.75977 10.7275 4.28125 10.9326C3.80273 11.1377 3.38574 11.4202 3.03027 11.7803C2.6748 12.1403 2.39453 12.5573 2.18945 13.0312C1.98438 13.5052 1.87956 14.0156 1.875 14.5625V15H1V14.5625C1 14.0658 1.07292 13.5872 1.21875 13.127C1.36458 12.6667 1.57422 12.2406 1.84766 11.8486C2.12109 11.4567 2.44466 11.1104 2.81836 10.8096C3.19206 10.5088 3.61133 10.265 4.07617 10.0781C3.87109 9.93685 3.68652 9.77279 3.52246 9.58594C3.3584 9.39909 3.2194 9.19857 3.10547 8.98438C2.99154 8.77018 2.90495 8.54232 2.8457 8.30078C2.78646 8.05924 2.75456 7.81315 2.75 7.5625C2.75 7.13867 2.82975 6.74219 2.98926 6.37305C3.14876 6.00391 3.36751 5.68034 3.64551 5.40234C3.9235 5.12435 4.24707 4.9056 4.61621 4.74609C4.98535 4.58659 5.38411 4.50456 5.8125 4.5C6.23633 4.5 6.63281 4.57975 7.00195 4.73926C7.37109 4.89876 7.69466 5.11751 7.97266 5.39551C8.25065 5.6735 8.4694 5.99707 8.62891 6.36621C8.78841 6.73535 8.87044 7.13411 8.875 7.5625C8.875 7.81315 8.84538 8.05697 8.78613 8.29395C8.72689 8.53092 8.63802 8.75879 8.51953 8.97754C8.40104 9.19629 8.26204 9.39909 8.10254 9.58594C7.94303 9.77279 7.75846 9.93685 7.54883 10.0781ZM5.8125 9.75C6.11328 9.75 6.39583 9.69303 6.66016 9.5791C6.92448 9.46517 7.15462 9.31022 7.35059 9.11426C7.54655 8.91829 7.70378 8.68587 7.82227 8.41699C7.94076 8.14811 8 7.86328 8 7.5625C8 7.26172 7.94303 6.97917 7.8291 6.71484C7.71517 6.45052 7.55794 6.22038 7.35742 6.02441C7.1569 5.82845 6.92448 5.67122 6.66016 5.55273C6.39583 5.43424 6.11328 5.375 5.8125 5.375C5.51172 5.375 5.22917 5.43197 4.96484 5.5459C4.70052 5.65983 4.4681 5.81706 4.26758 6.01758C4.06706 6.2181 3.90983 6.45052 3.7959 6.71484C3.68197 6.97917 3.625 7.26172 3.625 7.5625C3.625 7.86328 3.68197 8.14583 3.7959 8.41016C3.90983 8.67448 4.06478 8.9069 4.26074 9.10742C4.45671 9.30794 4.68913 9.46517 4.95801 9.5791C5.22689 9.69303 5.51172 9.75 5.8125 9.75ZM15 1V8H13.25L10.625 10.625V8H9.75V7.125H11.5V8.5127L12.8877 7.125H14.125V1.875H5.375V3.44727C5.22917 3.46549 5.08333 3.48828 4.9375 3.51562C4.79167 3.54297 4.64583 3.58398 4.5 3.63867V1H15Z" fill="#C5C5C5"></path></svg>'},4982:D=>{D.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.12 4.37333L8.58667 1.97333H7.41333L6.88 4.37333L6.18667 4.69333L4.21333 3.41333L3.30667 4.21333L4.58667 6.18667L4.42667 6.88L2.02667 7.41333V8.58667L4.42667 9.12L4.69333 9.92L3.41333 11.8933L4.21333 12.6933L6.18667 11.4133L6.98667 11.68L7.41333 13.9733H8.58667L9.12 11.5733L9.92 11.3067L11.8933 12.5867L12.6933 11.7867L11.4133 9.81333L11.68 9.01333L14.0267 8.58667V7.41333L11.6267 6.88L11.3067 6.08L12.5867 4.10667L11.7867 3.30667L9.81333 4.58667L9.12 4.37333ZM9.38667 1.01333L9.92 3.41333L12 2.08L14.0267 4.10667L12.5867 6.18667L14.9867 6.61333V9.38667L12.5867 9.92L14.0267 12L12 13.9733L9.92 12.5867L9.38667 14.9867H6.61333L6.08 12.5867L4 13.92L2.02667 11.8933L3.41333 9.81333L1.01333 9.38667V6.61333L3.41333 6.08L2.08 4L4.10667 1.97333L6.18667 3.41333L6.61333 1.01333H9.38667ZM10.0267 8C10.0267 8.53333 9.81333 8.99556 9.38667 9.38667C8.99556 9.77778 8.53333 9.97333 8 9.97333C7.46667 9.97333 7.00444 9.77778 6.61333 9.38667C6.22222 8.99556 6.02667 8.53333 6.02667 8C6.02667 7.46667 6.22222 7.00444 6.61333 6.61333C7.00444 6.18667 7.46667 5.97333 8 5.97333C8.53333 5.97333 8.99556 6.18667 9.38667 6.61333C9.81333 7.00444 10.0267 7.46667 10.0267 8ZM8 9.01333C8.28444 9.01333 8.51556 8.92444 8.69333 8.74667C8.90667 8.53333 9.01333 8.28444 9.01333 8C9.01333 7.71556 8.90667 7.48444 8.69333 7.30667C8.51556 7.09333 8.28444 6.98667 8 6.98667C7.71556 6.98667 7.46667 7.09333 7.25333 7.30667C7.07556 7.48444 6.98667 7.71556 6.98667 8C6.98667 8.28444 7.07556 8.53333 7.25333 8.74667C7.46667 8.92444 7.71556 9.01333 8 9.01333Z" fill="#CCCCCC"></path></svg>'},6781:D=>{D.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.28 7.78a.75.75 0 00-1.06-1.06l-9.5 9.5a.75.75 0 101.06 1.06l9.5-9.5z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>'},6105:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M5.39804 10.8069C5.57428 10.9312 5.78476 10.9977 6.00043 10.9973C6.21633 10.9975 6.42686 10.93 6.60243 10.8043C6.77993 10.6739 6.91464 10.4936 6.98943 10.2863L7.43643 8.91335C7.55086 8.56906 7.74391 8.25615 8.00028 7.99943C8.25665 7.74272 8.56929 7.54924 8.91343 7.43435L10.3044 6.98335C10.4564 6.92899 10.5936 6.84019 10.7055 6.7239C10.8174 6.60762 10.9008 6.467 10.9492 6.31308C10.9977 6.15916 11.0098 5.99611 10.9847 5.83672C10.9596 5.67732 10.8979 5.52591 10.8044 5.39435C10.6703 5.20842 10.4794 5.07118 10.2604 5.00335L8.88543 4.55635C8.54091 4.44212 8.22777 4.24915 7.97087 3.99277C7.71396 3.73638 7.52035 3.42363 7.40543 3.07935L6.95343 1.69135C6.88113 1.48904 6.74761 1.31428 6.57143 1.19135C6.43877 1.09762 6.28607 1.03614 6.12548 1.01179C5.96489 0.987448 5.80083 1.00091 5.64636 1.05111C5.49188 1.1013 5.35125 1.18685 5.23564 1.30095C5.12004 1.41505 5.03265 1.55454 4.98043 1.70835L4.52343 3.10835C4.40884 3.44317 4.21967 3.74758 3.97022 3.9986C3.72076 4.24962 3.41753 4.44067 3.08343 4.55735L1.69243 5.00535C1.54065 5.05974 1.40352 5.14852 1.29177 5.26474C1.18001 5.38095 1.09666 5.52145 1.04824 5.67523C0.999819 5.82902 0.987639 5.99192 1.01265 6.1512C1.03767 6.31048 1.0992 6.46181 1.19243 6.59335C1.32027 6.7728 1.50105 6.90777 1.70943 6.97935L3.08343 7.42435C3.52354 7.57083 3.90999 7.84518 4.19343 8.21235C4.35585 8.42298 4.4813 8.65968 4.56443 8.91235L5.01643 10.3033C5.08846 10.5066 5.22179 10.6826 5.39804 10.8069ZM5.48343 3.39235L6.01043 2.01535L6.44943 3.39235C6.61312 3.8855 6.88991 4.33351 7.25767 4.70058C7.62544 5.06765 8.07397 5.34359 8.56743 5.50635L9.97343 6.03535L8.59143 6.48335C8.09866 6.64764 7.65095 6.92451 7.28382 7.29198C6.9167 7.65945 6.64026 8.10742 6.47643 8.60035L5.95343 9.97835L5.50443 8.59935C5.34335 8.10608 5.06943 7.65718 4.70443 7.28835C4.3356 6.92031 3.88653 6.64272 3.39243 6.47735L2.01443 5.95535L3.40043 5.50535C3.88672 5.33672 4.32775 5.05855 4.68943 4.69235C5.04901 4.32464 5.32049 3.88016 5.48343 3.39235ZM11.5353 14.8494C11.6713 14.9456 11.8337 14.9973 12.0003 14.9974C12.1654 14.9974 12.3264 14.9464 12.4613 14.8514C12.6008 14.7529 12.7058 14.6129 12.7613 14.4514L13.0093 13.6894C13.0625 13.5309 13.1515 13.3869 13.2693 13.2684C13.3867 13.1498 13.5307 13.0611 13.6893 13.0094L14.4613 12.7574C14.619 12.7029 14.7557 12.6004 14.8523 12.4644C14.9257 12.3614 14.9736 12.2424 14.9921 12.1173C15.0106 11.9922 14.9992 11.8645 14.9588 11.7447C14.9184 11.6249 14.8501 11.5163 14.7597 11.428C14.6692 11.3396 14.5591 11.2739 14.4383 11.2364L13.6743 10.9874C13.5162 10.9348 13.3724 10.8462 13.2544 10.7285C13.1364 10.6109 13.0473 10.4674 12.9943 10.3094L12.7423 9.53638C12.6886 9.37853 12.586 9.24191 12.4493 9.14638C12.3473 9.07343 12.2295 9.02549 12.1056 9.00642C11.9816 8.98736 11.8549 8.99772 11.7357 9.03665C11.6164 9.07558 11.508 9.142 11.4192 9.23054C11.3304 9.31909 11.2636 9.42727 11.2243 9.54638L10.9773 10.3084C10.925 10.466 10.8375 10.6097 10.7213 10.7284C10.6066 10.8449 10.4667 10.9335 10.3123 10.9874L9.53931 11.2394C9.38025 11.2933 9.2422 11.3959 9.1447 11.5326C9.04721 11.6694 8.99522 11.8333 8.99611 12.0013C8.99699 12.1692 9.0507 12.3326 9.14963 12.4683C9.24856 12.604 9.38769 12.7051 9.54731 12.7574L10.3103 13.0044C10.4692 13.0578 10.6136 13.1471 10.7323 13.2654C10.8505 13.3836 10.939 13.5283 10.9903 13.6874L11.2433 14.4614C11.2981 14.6178 11.4001 14.7534 11.5353 14.8494ZM10.6223 12.0564L10.4433 11.9974L10.6273 11.9334C10.9291 11.8284 11.2027 11.6556 11.4273 11.4284C11.6537 11.1994 11.8248 10.9216 11.9273 10.6164L11.9853 10.4384L12.0443 10.6194C12.1463 10.9261 12.3185 11.2047 12.5471 11.4332C12.7757 11.6617 13.0545 11.8336 13.3613 11.9354L13.5563 11.9984L13.3763 12.0574C13.0689 12.1596 12.7898 12.3322 12.5611 12.5616C12.3324 12.791 12.1606 13.0707 12.0593 13.3784L12.0003 13.5594L11.9423 13.3784C11.8409 13.0702 11.6687 12.7901 11.4394 12.5605C11.2102 12.3309 10.9303 12.1583 10.6223 12.0564Z"></path></svg>'},6898:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1.99976L14 2.99976V12.9998L13 13.9998H3L2 12.9998L2 2.99976L3 1.99976H13ZM12.7461 3.25057L3.25469 3.25057L3.25469 12.7504H12.7461V3.25057Z"></path></svg>'},7580:D=>{D.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.006 8.267L.78 9.5 0 8.73l2.09-2.07.76.01 2.09 2.12-.76.76-1.167-1.18a5 5 0 0 0 9.4 1.983l.813.597a6 6 0 0 1-11.22-2.683zm10.99-.466L11.76 6.55l-.76.76 2.09 2.11.76.01 2.09-2.07-.75-.76-1.194 1.18a6 6 0 0 0-11.11-2.92l.81.594a5 5 0 0 1 9.3 2.346z"></path></svg>'}},Oo={};function me(D){var S=Oo[D];if(S!==void 0)return S.exports;var Y=Oo[D]={id:D,exports:{}};return sl[D].call(Y.exports,Y,Y.exports,me),Y.exports}l(me,"__webpack_require__"),(()=>{me.n=D=>{var S=D&&D.__esModule?()=>D.default:()=>D;return me.d(S,{a:S}),S}})(),(()=>{me.d=(D,S)=>{for(var Y in S)me.o(S,Y)&&!me.o(D,Y)&&Object.defineProperty(D,Y,{enumerable:!0,get:S[Y]})}})(),(()=>{me.o=(D,S)=>Object.prototype.hasOwnProperty.call(D,S)})(),(()=>{me.nc=void 0})();var lc={};(()=>{"use strict";var D=me(3379),S=me.n(D),Y=me(9149),J={};J.insert="head",J.singleton=!1;var ee=S()(Y.Z,J);const I=Y.Z.locals||{};var y=me(7238),h={};h.insert="head",h.singleton=!1;var H=S()(y.Z,h);const z=y.Z.locals||{};var W=me(296),s=me(7294),ne=me(3935),te;(function(o){o[o.Committed=0]="Committed",o[o.Mentioned=1]="Mentioned",o[o.Subscribed=2]="Subscribed",o[o.Commented=3]="Commented",o[o.Reviewed=4]="Reviewed",o[o.NewCommitsSinceReview=5]="NewCommitsSinceReview",o[o.Labeled=6]="Labeled",o[o.Milestoned=7]="Milestoned",o[o.Assigned=8]="Assigned",o[o.HeadRefDeleted=9]="HeadRefDeleted",o[o.Merged=10]="Merged",o[o.Other=11]="Other"})(te||(te={}));var De=Object.defineProperty,Pe=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?De(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"__publicField");const j=acquireVsCodeApi();class K{constructor(a){Pe(this,"_commandHandler"),Pe(this,"lastSentReq"),Pe(this,"pendingReplies"),this._commandHandler=a,this.lastSentReq=0,this.pendingReplies=Object.create(null),window.addEventListener("message",this.handleMessage.bind(this))}registerCommandHandler(a){this._commandHandler=a}async postMessage(a){const f=String(++this.lastSentReq);return new Promise((c,m)=>{this.pendingReplies[f]={resolve:c,reject:m},a=Object.assign(a,{req:f}),j.postMessage(a)})}handleMessage(a){const f=a.data;if(f.seq){const c=this.pendingReplies[f.seq];if(c){f.err?c.reject(f.err):c.resolve(f.res);return}}this._commandHandler&&this._commandHandler(f.res)}}l(K,"MessageHandler");function de(o){return new K(o)}l(de,"getMessageHandler");function M(){return j.getState()}l(M,"getState");function E(o){const a=M();a&&a.number&&a.number===o.number&&(o.pendingCommentText=a.pendingCommentText),o&&j.setState(o)}l(E,"setState");function _(o){const a=j.getState();j.setState(Object.assign(a,o))}l(_,"updateState");var q=Object.defineProperty,R=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?q(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"context_publicField");const V=l(class{constructor(o=M(),a=null,f=null){this.pr=o,this.onchange=a,this._handler=f,R(this,"setTitle",async c=>{const m=await this.postMessage({command:"pr.edit-title",args:{text:c}});this.updatePR({titleHTML:m.titleHTML})}),R(this,"setDescription",c=>this.postMessage({command:"pr.edit-description",args:{text:c}})),R(this,"checkout",()=>this.postMessage({command:"pr.checkout"})),R(this,"copyPrLink",()=>this.postMessage({command:"pr.copy-prlink"})),R(this,"copyVscodeDevLink",()=>this.postMessage({command:"pr.copy-vscodedevlink"})),R(this,"exitReviewMode",async()=>{if(!!this.pr)return this.postMessage({command:"pr.checkout-default-branch",args:this.pr.repositoryDefaultBranch})}),R(this,"gotoChangesSinceReview",()=>this.postMessage({command:"pr.gotoChangesSinceReview"})),R(this,"refresh",()=>this.postMessage({command:"pr.refresh"})),R(this,"checkMergeability",()=>this.postMessage({command:"pr.checkMergeability"})),R(this,"changeEmail",async c=>{const m=await this.postMessage({command:"pr.change-email",args:c});this.updatePR({emailForCommit:m})}),R(this,"merge",async c=>await this.postMessage({command:"pr.merge",args:c})),R(this,"openOnGitHub",()=>this.postMessage({command:"pr.openOnGitHub"})),R(this,"deleteBranch",()=>this.postMessage({command:"pr.deleteBranch"})),R(this,"revert",async()=>{this.updatePR({busy:!0});const c=await this.postMessage({command:"pr.revert"});this.updatePR({busy:!1,...c})}),R(this,"readyForReview",()=>this.postMessage({command:"pr.readyForReview"})),R(this,"addReviewers",()=>this.postMessage({command:"pr.change-reviewers"})),R(this,"changeProjects",()=>this.postMessage({command:"pr.change-projects"})),R(this,"removeProject",c=>this.postMessage({command:"pr.remove-project",args:c})),R(this,"addMilestone",()=>this.postMessage({command:"pr.add-milestone"})),R(this,"removeMilestone",()=>this.postMessage({command:"pr.remove-milestone"})),R(this,"addAssignees",()=>this.postMessage({command:"pr.change-assignees"})),R(this,"addAssigneeYourself",()=>this.postMessage({command:"pr.add-assignee-yourself"})),R(this,"addLabels",()=>this.postMessage({command:"pr.add-labels"})),R(this,"create",()=>this.postMessage({command:"pr.open-create"})),R(this,"deleteComment",async c=>{await this.postMessage({command:"pr.delete-comment",args:c});const{pr:m}=this,{id:v,pullRequestReviewId:w}=c;if(!w){this.updatePR({events:m.events.filter(B=>B.id!==v)});return}const T=m.events.findIndex(B=>B.id===w);if(T===-1){console.error("Could not find review:",w);return}const O=m.events[T];if(!O.comments){console.error("No comments to delete for review:",w,O);return}this.pr.events.splice(T,1,{...O,comments:O.comments.filter(B=>B.id!==v)}),this.updatePR(this.pr)}),R(this,"editComment",c=>this.postMessage({command:"pr.edit-comment",args:c})),R(this,"updateDraft",(c,m)=>{const w=M().pendingCommentDrafts||Object.create(null);m!==w[c]&&(w[c]=m,this.updatePR({pendingCommentDrafts:w}))}),R(this,"requestChanges",async c=>this.appendReview(await this.postMessage({command:"pr.request-changes",args:c}))),R(this,"approve",async c=>this.appendReview(await this.postMessage({command:"pr.approve",args:c}))),R(this,"submit",async c=>this.appendReview(await this.postMessage({command:"pr.submit",args:c}))),R(this,"close",async c=>{try{const v=(await this.postMessage({command:"pr.close",args:c})).value;v.event=te.Commented,this.updatePR({events:[...this.pr.events,v],pendingCommentText:""})}catch(m){}}),R(this,"removeLabel",async c=>{await this.postMessage({command:"pr.remove-label",args:c});const m=this.pr.labels.filter(v=>v.name!==c);this.updatePR({labels:m})}),R(this,"applyPatch",async c=>{this.postMessage({command:"pr.apply-patch",args:{comment:c}})}),R(this,"reRequestReview",async c=>{const{reviewers:m}=await this.postMessage({command:"pr.re-request-review",args:c}),v=this.pr;v.reviewers=m,this.updatePR(v)}),R(this,"updateBranch",async()=>{var c,m;const v=await this.postMessage({command:"pr.update-branch"}),w=this.pr;w.events=(c=v.events)!=null?c:w.events,w.mergeable=(m=v.mergeable)!=null?m:w.mergeable,this.updatePR(w)}),R(this,"dequeue",async()=>{const c=await this.postMessage({command:"pr.dequeue"}),m=this.pr;c&&(m.mergeQueueEntry=void 0),this.updatePR(m)}),R(this,"enqueue",async()=>{const c=await this.postMessage({command:"pr.enqueue"}),m=this.pr;c.mergeQueueEntry&&(m.mergeQueueEntry=c.mergeQueueEntry),this.updatePR(m)}),R(this,"openDiff",c=>this.postMessage({command:"pr.open-diff",args:{comment:c}})),R(this,"toggleResolveComment",(c,m,v)=>{this.postMessage({command:"pr.resolve-comment-thread",args:{threadId:c,toResolve:v,thread:m}}).then(w=>{w?this.updatePR({events:w}):this.refresh()})}),R(this,"setPR",c=>(this.pr=c,E(this.pr),this.onchange&&this.onchange(this.pr),this)),R(this,"updatePR",c=>(_(c),this.pr={...this.pr,...c},this.onchange&&this.onchange(this.pr),this)),R(this,"handleMessage",c=>{var m;switch(c.command){case"pr.initialize":return this.setPR(c.pullrequest);case"update-state":return this.updatePR({state:c.state});case"pr.update-checkout-status":return this.updatePR({isCurrentlyCheckedOut:c.isCurrentlyCheckedOut});case"pr.deleteBranch":const v={};return c.branchTypes&&c.branchTypes.map(T=>{T==="local"?v.isLocalHeadDeleted=!0:(T==="remote"||T==="upstream")&&(v.isRemoteHeadDeleted=!0)}),this.updatePR(v);case"pr.enable-exit":return this.updatePR({isCurrentlyCheckedOut:!0});case"set-scroll":window.scrollTo(c.scrollPosition.x,c.scrollPosition.y);return;case"pr.scrollToPendingReview":const w=(m=document.getElementById("pending-review"))!=null?m:document.getElementById("comment-textarea");w&&(w.scrollIntoView(),w.focus());return;case"pr.submitting-review":return this.updatePR({busy:!0,lastReviewType:c.lastReviewType});case"pr.append-review":return this.appendReview(c)}}),f||(this._handler=de(this.handleMessage))}appendReview({review:o,reviewers:a}){const f=this.pr;if(f.busy=!1,!o||!a){this.updatePR(f);return}f.events.filter(m=>m.event!==te.Reviewed||m.state.toLowerCase()!=="pending").forEach(m=>{m.event===te.Reviewed&&m.comments.forEach(v=>v.isDraft=!1)}),f.reviewers=a,f.events=[...f.events.filter(m=>m.event===te.Reviewed?m.state!=="PENDING":m),o],f.currentUserReviewState=o.state,f.pendingCommentText="",f.pendingReviewType=void 0,this.updatePR(f)}async updateAutoMerge({autoMerge:o,autoMergeMethod:a}){const f=await this.postMessage({command:"pr.update-automerge",args:{autoMerge:o,autoMergeMethod:a}}),c=this.pr;c.autoMerge=f.autoMerge,c.autoMergeMethod=f.autoMergeMethod,this.updatePR(c)}postMessage(o){var a,f;return(f=(a=this._handler)==null?void 0:a.postMessage(o))!=null?f:Promise.resolve(void 0)}},"_PRContext");let N=V;R(N,"instance",new V);const $=(0,s.createContext)(N.instance);var Z;(function(o){o[o.Query=0]="Query",o[o.All=1]="All",o[o.LocalPullRequest=2]="LocalPullRequest"})(Z||(Z={}));var ue;(function(o){o.Approve="APPROVE",o.RequestChanges="REQUEST_CHANGES",o.Comment="COMMENT"})(ue||(ue={}));var ie;(function(o){o[o.Open=0]="Open",o[o.Merged=1]="Merged",o[o.Closed=2]="Closed"})(ie||(ie={}));var re;(function(o){o[o.Mergeable=0]="Mergeable",o[o.NotMergeable=1]="NotMergeable",o[o.Conflict=2]="Conflict",o[o.Unknown=3]="Unknown",o[o.Behind=4]="Behind"})(re||(re={}));var fe;(function(o){o[o.AwaitingChecks=0]="AwaitingChecks",o[o.Locked=1]="Locked",o[o.Mergeable=2]="Mergeable",o[o.Queued=3]="Queued",o[o.Unmergeable=4]="Unmergeable"})(fe||(fe={}));function Se(o){return Be(o)?o.id:o.login}l(Se,"reviewerId");function Ie(o){var a;return Be(o)?(a=o.name)!=null?a:o.slug:o.login}l(Ie,"reviewerLabel");function Be(o){return"org"in o}l(Be,"isTeam");function Ze(o){return"isAuthor"in o&&"isCommenter"in o}l(Ze,"isSuggestedReviewer");var Me;(function(o){o.Success="success",o.Failure="failure",o.Neutral="neutral",o.Pending="pending",o.Unknown="unknown"})(Me||(Me={}));var Te;(function(o){o.Comment="comment",o.Approve="approve",o.RequestChanges="requestChanges"})(Te||(Te={}));var tt;(function(o){o[o.None=0]="None",o[o.Available=1]="Available",o[o.ReviewedWithComments=2]="ReviewedWithComments",o[o.ReviewedWithoutComments=3]="ReviewedWithoutComments"})(tt||(tt={}));function Ae(o){var a,f;const c=(a=o.submittedAt)!=null?a:o.createdAt,m=c&&Date.now()-new Date(c).getTime()<1e3*60,v=(f=o.state)!=null?f:o.event===te.Commented?"COMMENTED":void 0;let w="";if(m)switch(v){case"APPROVED":w="Pull request approved";break;case"CHANGES_REQUESTED":w="Changes requested on pull request";break;case"COMMENTED":w="Commented on pull request";break}return w}l(Ae,"ariaAnnouncementForReview");var F=me(7187);const X=new F.EventEmitter;function ye(o){const[a,f]=(0,s.useState)(o);return(0,s.useEffect)(()=>{a!==o&&f(o)},[o]),[a,f]}l(ye,"useStateProp");const g=l(({className:o="",src:a,title:f})=>s.createElement("span",{className:`icon ${o}`,title:f,dangerouslySetInnerHTML:{__html:a}}),"Icon"),P=null,pe=s.createElement(g,{src:me(1828)}),we=s.createElement(g,{src:me(8060),className:"check"}),xe=s.createElement(g,{src:me(6781),className:"skip"}),ze=s.createElement(g,{src:me(3274)}),ot=s.createElement(g,{src:me(7943)}),Ee=s.createElement(g,{src:me(2651)}),Re=s.createElement(g,{src:me(832)}),pt=s.createElement(g,{src:me(2776)}),Fr=s.createElement(g,{src:me(3879)}),dt=s.createElement(g,{src:me(6589)}),Do=s.createElement(g,{src:me(1144)}),al=s.createElement(g,{src:me(6307)}),it=s.createElement(g,{src:me(5143)}),ar=s.createElement(g,{src:me(2225)}),dn=s.createElement(g,{src:me(4364)}),en=s.createElement(g,{src:me(3476)}),ur=s.createElement(g,{src:me(1343),className:"pending"}),Dn=s.createElement(g,{src:me(4534)}),fn=s.createElement(g,{src:me(4982)}),Pt=s.createElement(g,{src:me(4933),className:"close"}),ul=s.createElement(g,{src:me(7580)}),Io=s.createElement(g,{src:me(7602)}),zr=s.createElement(g,{src:me(5140)}),Ao=s.createElement(g,{src:me(5720)}),Ho=s.createElement(g,{src:me(6305)}),cl=s.createElement(g,{src:me(4962)}),dl=s.createElement(g,{src:me(1608)}),fl=s.createElement(g,{src:me(1922)}),cr=s.createElement(g,{src:me(9553)}),js=s.createElement(g,{src:me(6105)}),$t=s.createElement(g,{src:me(6898)});function Vr(){const[o,a]=(0,s.useState)([0,0]);return(0,s.useLayoutEffect)(()=>{function f(){a([window.innerWidth,window.innerHeight])}return l(f,"updateSize"),window.addEventListener("resize",f),f(),()=>window.removeEventListener("resize",f)},[]),o}l(Vr,"useWindowSize");const jt=l(({optionsContext:o,defaultOptionLabel:a,defaultOptionValue:f,defaultAction:c,allOptions:m,optionsTitle:v,disabled:w,hasSingleAction:T})=>{const[O,B]=(0,s.useState)(!1),ve=l(se=>{se.target instanceof HTMLElement&&se.target.classList.contains("split-right")||B(!1)},"onHideAction");(0,s.useEffect)(()=>{const se=l(He=>ve(He),"onClickOrKey");O?(document.addEventListener("click",se),document.addEventListener("keydown",se)):(document.removeEventListener("click",se),document.removeEventListener("keydown",se))},[O,B]);const oe=(0,s.useRef)();return Vr(),s.createElement("div",{className:"dropdown-container",ref:oe},oe.current&&oe.current.clientWidth>375&&m&&!T?m().map(({label:se,value:He,action:Ue})=>s.createElement("button",{className:"inlined-dropdown",key:He,title:se,disabled:w,onClick:Ue,value:He},se)):s.createElement("div",{className:"primary-split-button"},s.createElement("button",{className:"split-left",disabled:w,onClick:c,value:f(),title:a()},a()),s.createElement("div",{className:"split"}),T?null:s.createElement("button",{className:"split-right",title:v,disabled:w,"aria-expanded":O,onClick:se=>{se.preventDefault();const He=se.target.getBoundingClientRect(),Ue=He.left,$e=He.bottom;se.target.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,clientX:Ue,clientY:$e})),se.stopPropagation()},onMouseDown:()=>B(!0),onKeyDown:se=>{(se.key==="Enter"||se.key===" ")&&B(!0)},"data-vscode-context":o()},ot)))},"contextDropdown_ContextDropdown"),lt=String.fromCharCode(160),ml=l(({children:o})=>{const a=s.Children.count(o);return s.createElement(s.Fragment,{children:s.Children.map(o,(f,c)=>typeof f=="string"?`${c>0?lt:""}${f}${c<a-1&&typeof o[c+1]!="string"?lt:""}`:f)})},"Spaced");var $r=me(6470),Fo=me(7484),mn=me.n(Fo),zo=me(4110),Vo=me.n(zo),jr=me(660),$o=me.n(jr),Br=Object.defineProperty,Ke=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?Br(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"utils_publicField");mn().extend(Vo(),{thresholds:[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:6,d:"day"},{l:"w",r:7},{l:"ww",r:3,d:"week"},{l:"M",r:4},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}]}),mn().extend($o()),mn().updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"}});function jo(o,a){const f=Object.create(null);return o.filter(c=>{const m=a(c);return f[m]?!1:(f[m]=!0,!0)})}l(jo,"uniqBy");function pn(o){return o.forEach(a=>a.dispose()),[]}l(pn,"dispose");function Ur(o){return{dispose:o}}l(Ur,"toDisposable");function Bo(o){return Ur(()=>pn(o))}l(Bo,"combinedDisposable");function pl(...o){return(a,f=null,c)=>{const m=Bo(o.map(v=>v(w=>a.call(f,w))));return c&&c.push(m),m}}l(pl,"anyEvent");function hl(o,a){return(f,c=null,m)=>o(v=>a(v)&&f.call(c,v),null,m)}l(hl,"filterEvent");function vl(o){return(a,f=null,c)=>{const m=o(v=>(m.dispose(),a.call(f,v)),null,c);return m}}l(vl,"onceEvent");function Uo(o){return/^[a-zA-Z]:\\/.test(o)}l(Uo,"isWindowsPath");function Wo(o,a,f=sep){return o===a?!0:(o.charAt(o.length-1)!==f&&(o+=f),Uo(o)&&(o=o.toLowerCase(),a=a.toLowerCase()),a.startsWith(o))}l(Wo,"isDescendant");function In(o,a){return o.reduce((f,c)=>{const m=a(c);return f[m]=[...f[m]||[],c],f},Object.create(null))}l(In,"groupBy");class Wr extends Error{constructor(a){super(`Unreachable case: ${a}`)}}l(Wr,"UnreachableCaseError");function An(o){return!!o.errors}l(An,"isHookError");function dr(o){let a=!0;if(!!o.errors&&Array.isArray(o.errors)){for(const f of o.errors)if(!f.field||!f.value||!f.code){a=!1;break}}else a=!1;return a}l(dr,"hasFieldErrors");function Hn(o){if(!(o instanceof Error))return typeof o=="string"?o:o.gitErrorCode?`${o.message}. Please check git output for more details`:o.stderr?`${o.stderr}. Please check git output for more details`:"Error";let a=o.message,f;if(o.message==="Validation Failed"&&dr(o))f=o.errors.map(c=>`Value "${c.value}" cannot be set for field ${c.field} (code: ${c.code})`).join(", ");else{if(o.message.startsWith("Validation Failed:"))return o.message;if(An(o)&&o.errors)return o.errors.map(c=>typeof c=="string"?c:c.message).join(", ")}return f&&(a=`${a}: ${f}`),a}l(Hn,"formatError");async function qo(o){return new Promise(a=>{const f=o(c=>{f.dispose(),a(c)})})}l(qo,"asPromise");async function gl(o,a){return Promise.race([o,new Promise(f=>{setTimeout(()=>f(void 0),a)})])}l(gl,"promiseWithTimeout");function Fn(o){const a=mn()(o),f=Date.now();return a.diff(f,"month"),a.diff(f,"month")<1?a.fromNow():a.diff(f,"year")<1?`on ${a.format("MMM D")}`:`on ${a.format("MMM D, YYYY")}`}l(Fn,"dateFromNow");function fr(o,a,f=!1){o.startsWith("#")&&(o=o.substring(1));const c=Zr(o);if(a){const m=Zo(c.r,c.g,c.b),v=.6,w=.18,T=.3,O=(c.r*.2126+c.g*.7152+c.b*.0722)/255,B=Math.max(0,Math.min((O-v)*-1e3,1)),ve=(v-O)*100*B,oe=Zr(hn(m.h,m.s,m.l+ve)),se=`#${hn(m.h,m.s,m.l+ve)}`,He=f?`#${qr({...c,a:w})}`:`rgba(${c.r},${c.g},${c.b},${w})`,Ue=f?`#${qr({...oe,a:T})}`:`rgba(${oe.r},${oe.g},${oe.b},${T})`;return{textColor:se,backgroundColor:He,borderColor:Ue}}else return{textColor:`#${Qo(c)}`,backgroundColor:`#${o}`,borderColor:`#${o}`}}l(fr,"utils_gitHubLabelColor");const qr=l(o=>{const a=[o.r,o.g,o.b];return o.a&&a.push(Math.floor(o.a*255)),a.map(f=>f.toString(16).padStart(2,"0")).join("")},"rgbToHex");function Zr(o){const a=/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:{r:0,g:0,b:0}}l(Zr,"hexToRgb");function Zo(o,a,f){o/=255,a/=255,f/=255;let c=Math.min(o,a,f),m=Math.max(o,a,f),v=m-c,w=0,T=0,O=0;return v==0?w=0:m==o?w=(a-f)/v%6:m==a?w=(f-o)/v+2:w=(o-a)/v+4,w=Math.round(w*60),w<0&&(w+=360),O=(m+c)/2,T=v==0?0:v/(1-Math.abs(2*O-1)),T=+(T*100).toFixed(1),O=+(O*100).toFixed(1),{h:w,s:T,l:O}}l(Zo,"rgbToHsl");function hn(o,a,f){const c=f/100,m=a*Math.min(c,1-c)/100,v=l(w=>{const T=(w+o/30)%12,O=c-m*Math.max(Math.min(T-3,9-T,1),-1);return Math.round(255*O).toString(16).padStart(2,"0")},"f");return`${v(0)}${v(8)}${v(4)}`}l(hn,"hslToHex");function Qo(o){return(.299*o.r+.587*o.g+.114*o.b)/255>.5?"000000":"ffffff"}l(Qo,"contrastColor");var mr;(function(o){o[o.Period=46]="Period",o[o.Slash=47]="Slash",o[o.A=65]="A",o[o.Z=90]="Z",o[o.Backslash=92]="Backslash",o[o.a=97]="a",o[o.z=122]="z"})(mr||(mr={}));function Bt(o,a){return o<a?-1:o>a?1:0}l(Bt,"compare");function pr(o,a,f=0,c=o.length,m=0,v=a.length){for(;f<c&&m<v;f++,m++){const O=o.charCodeAt(f),B=a.charCodeAt(m);if(O<B)return-1;if(O>B)return 1}const w=c-f,T=v-m;return w<T?-1:w>T?1:0}l(pr,"compareSubstring");function Qr(o,a){return Kr(o,a,0,o.length,0,a.length)}l(Qr,"compareIgnoreCase");function Kr(o,a,f=0,c=o.length,m=0,v=a.length){for(;f<c&&m<v;f++,m++){let O=o.charCodeAt(f),B=a.charCodeAt(m);if(O===B)continue;const ve=O-B;if(!(ve===32&&tn(B))&&!(ve===-32&&tn(O)))return Yr(O)&&Yr(B)?ve:pr(o.toLowerCase(),a.toLowerCase(),f,c,m,v)}const w=c-f,T=v-m;return w<T?-1:w>T?1:0}l(Kr,"compareSubstringIgnoreCase");function Yr(o){return o>=97&&o<=122}l(Yr,"isLowerAsciiLetter");function tn(o){return o>=65&&o<=90}l(tn,"isUpperAsciiLetter");class hr{constructor(){Ke(this,"_value",""),Ke(this,"_pos",0)}reset(a){return this._value=a,this._pos=0,this}next(){return this._pos+=1,this}hasNext(){return this._pos<this._value.length-1}cmp(a){const f=a.charCodeAt(0),c=this._value.charCodeAt(this._pos);return f-c}value(){return this._value[this._pos]}}l(hr,"StringIterator");class vn{constructor(a=!0){this._caseSensitive=a,Ke(this,"_value"),Ke(this,"_from"),Ke(this,"_to")}reset(a){return this._value=a,this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++)if(this._value.charCodeAt(this._to)===46)if(a)this._from++;else break;else a=!1;return this}cmp(a){return this._caseSensitive?pr(a,this._value,0,a.length,this._from,this._to):Kr(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}}l(vn,"ConfigKeysIterator");class Xr{constructor(a=!0,f=!0){this._splitOnBackslash=a,this._caseSensitive=f,Ke(this,"_value"),Ke(this,"_from"),Ke(this,"_to")}reset(a){return this._value=a.replace(/\\$|\/$/,""),this._from=0,this._to=0,this.next()}hasNext(){return this._to<this._value.length}next(){this._from=this._to;let a=!0;for(;this._to<this._value.length;this._to++){const f=this._value.charCodeAt(this._to);if(f===47||this._splitOnBackslash&&f===92)if(a)this._from++;else break;else a=!1}return this}cmp(a){return this._caseSensitive?pr(a,this._value,0,a.length,this._from,this._to):Kr(a,this._value,0,a.length,this._from,this._to)}value(){return this._value.substring(this._from,this._to)}}l(Xr,"PathIterator");var zn;(function(o){o[o.Scheme=1]="Scheme",o[o.Authority=2]="Authority",o[o.Path=3]="Path",o[o.Query=4]="Query",o[o.Fragment=5]="Fragment"})(zn||(zn={}));class vr{constructor(a){this._ignorePathCasing=a,Ke(this,"_pathIterator"),Ke(this,"_value"),Ke(this,"_states",[]),Ke(this,"_stateIdx",0)}reset(a){return this._value=a,this._states=[],this._value.scheme&&this._states.push(1),this._value.authority&&this._states.push(2),this._value.path&&(this._pathIterator=new Xr(!1,!this._ignorePathCasing(a)),this._pathIterator.reset(a.path),this._pathIterator.value()&&this._states.push(3)),this._value.query&&this._states.push(4),this._value.fragment&&this._states.push(5),this._stateIdx=0,this}next(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()?this._pathIterator.next():this._stateIdx+=1,this}hasNext(){return this._states[this._stateIdx]===3&&this._pathIterator.hasNext()||this._stateIdx<this._states.length-1}cmp(a){if(this._states[this._stateIdx]===1)return Qr(a,this._value.scheme);if(this._states[this._stateIdx]===2)return Qr(a,this._value.authority);if(this._states[this._stateIdx]===3)return this._pathIterator.cmp(a);if(this._states[this._stateIdx]===4)return Bt(a,this._value.query);if(this._states[this._stateIdx]===5)return Bt(a,this._value.fragment);throw new Error}value(){if(this._states[this._stateIdx]===1)return this._value.scheme;if(this._states[this._stateIdx]===2)return this._value.authority;if(this._states[this._stateIdx]===3)return this._pathIterator.value();if(this._states[this._stateIdx]===4)return this._value.query;if(this._states[this._stateIdx]===5)return this._value.fragment;throw new Error}}l(vr,"UriIterator");function yl(o){const f=o.extensionUri.path,c=f.lastIndexOf(".");return c===-1?!1:f.substr(c+1).length>1}l(yl,"isPreRelease");class Ut{constructor(){Ke(this,"segment"),Ke(this,"value"),Ke(this,"key"),Ke(this,"left"),Ke(this,"mid"),Ke(this,"right")}isEmpty(){return!this.left&&!this.mid&&!this.right&&!this.value}}l(Ut,"TernarySearchTreeNode");class nn{constructor(a){Ke(this,"_iter"),Ke(this,"_root"),this._iter=a}static forUris(a=()=>!1){return new nn(new vr(a))}static forPaths(){return new nn(new Xr)}static forStrings(){return new nn(new hr)}static forConfigKeys(){return new nn(new vn)}clear(){this._root=void 0}set(a,f){const c=this._iter.reset(a);let m;for(this._root||(this._root=new Ut,this._root.segment=c.value()),m=this._root;;){const w=c.cmp(m.segment);if(w>0)m.left||(m.left=new Ut,m.left.segment=c.value()),m=m.left;else if(w<0)m.right||(m.right=new Ut,m.right.segment=c.value()),m=m.right;else if(c.hasNext())c.next(),m.mid||(m.mid=new Ut,m.mid.segment=c.value()),m=m.mid;else break}const v=m.value;return m.value=f,m.key=a,v}get(a){var f;return(f=this._getNode(a))==null?void 0:f.value}_getNode(a){const f=this._iter.reset(a);let c=this._root;for(;c;){const m=f.cmp(c.segment);if(m>0)c=c.left;else if(m<0)c=c.right;else if(f.hasNext())f.next(),c=c.mid;else break}return c}has(a){const f=this._getNode(a);return!((f==null?void 0:f.value)===void 0&&(f==null?void 0:f.mid)===void 0)}delete(a){return this._delete(a,!1)}deleteSuperstr(a){return this._delete(a,!0)}_delete(a,f){const c=this._iter.reset(a),m=[];let v=this._root;for(;v;){const w=c.cmp(v.segment);if(w>0)m.push([1,v]),v=v.left;else if(w<0)m.push([-1,v]),v=v.right;else if(c.hasNext())c.next(),m.push([0,v]),v=v.mid;else{for(f?(v.left=void 0,v.mid=void 0,v.right=void 0):v.value=void 0;m.length>0&&v.isEmpty();){let[T,O]=m.pop();switch(T){case 1:O.left=void 0;break;case 0:O.mid=void 0;break;case-1:O.right=void 0;break}v=O}break}}}findSubstr(a){const f=this._iter.reset(a);let c=this._root,m;for(;c;){const v=f.cmp(c.segment);if(v>0)c=c.left;else if(v<0)c=c.right;else if(f.hasNext())f.next(),m=c.value||m,c=c.mid;else break}return c&&c.value||m}findSuperstr(a){const f=this._iter.reset(a);let c=this._root;for(;c;){const m=f.cmp(c.segment);if(m>0)c=c.left;else if(m<0)c=c.right;else if(f.hasNext())f.next(),c=c.mid;else return c.mid?this._entries(c.mid):void 0}}forEach(a){for(const[f,c]of this)a(c,f)}*[Symbol.iterator](){yield*this._entries(this._root)}*_entries(a){a&&(yield*this._entries(a.left),a.value&&(yield[a.key,a.value]),yield*this._entries(a.mid),yield*this._entries(a.right))}}l(nn,"TernarySearchTree");async function wl(o,a,f){const c=[];o.replace(a,(w,...T)=>{const O=f(w,...T);return c.push(O),""});const m=await Promise.all(c);let v=0;return o.replace(a,()=>m[v++])}l(wl,"stringReplaceAsync");async function Cl(o,a,f){const c=Math.ceil(o.length/a);for(let m=0;m<c;m++){const v=o.slice(m*a,(m+1)*a);await Promise.all(v.map(f))}}l(Cl,"batchPromiseAll");const gn=l(({date:o,href:a})=>{const f=typeof o=="string"?new Date(o).toLocaleString():o.toLocaleString();return a?s.createElement("a",{href:a,className:"timestamp",title:f},Fn(o)):s.createElement("div",{className:"timestamp",title:f},Fn(o))},"Timestamp"),xl=null,gr=l(({for:o})=>s.createElement(s.Fragment,null,o.avatarUrl?s.createElement("img",{className:"avatar",src:o.avatarUrl,alt:"",role:"presentation"}):s.createElement(g,{className:"avatar-icon",src:me(2190)})),"InnerAvatar"),Rt=l(({for:o,link:a=!0})=>a?s.createElement("a",{className:"avatar-link",href:o.url,title:o.url},s.createElement(gr,{for:o})):s.createElement(gr,{for:o}),"Avatar"),Ot=l(({for:o,text:a=Ie(o)})=>s.createElement("a",{className:"author-link",href:o.url,title:o.url},a),"AuthorLink"),bt=l(({authorAssociation:o},a=f=>`(${f.toLowerCase()})`)=>o.toLowerCase()==="user"?a("you"):o&&o!=="NONE"?a(o):null,"association");function wt(o){const{isPRDescription:a,children:f,comment:c,headerInEditMode:m}=o,{bodyHTML:v,body:w}=c,T="id"in c?c.id:-1,O="canEdit"in c?c.canEdit:!1,B="canDelete"in c?c.canDelete:!1,ve=c.pullRequestReviewId,[oe,se]=ye(w),[He,Ue]=ye(v),{deleteComment:$e,editComment:Le,setDescription:he,pr:je}=(0,s.useContext)($),We=je.pendingCommentDrafts&&je.pendingCommentDrafts[T],[Lt,nt]=(0,s.useState)(!!We),[En,ht]=(0,s.useState)(!1);if(Lt)return s.cloneElement(m?s.createElement(yn,{for:c}):s.createElement(s.Fragment,null),{},[s.createElement($n,{id:T,key:`editComment${T}`,body:We||oe,onCancel:()=>{je.pendingCommentDrafts&&delete je.pendingCommentDrafts[T],nt(!1)},onSave:async mt=>{try{const Ve=a?await he(mt):await Le({comment:c,text:mt});Ue(Ve.bodyHTML),se(mt)}finally{nt(!1)}}})]);const Tr=c.event===te.Commented||c.event===te.Reviewed?Ae(c):void 0;return s.createElement(yn,{for:c,onMouseEnter:()=>ht(!0),onMouseLeave:()=>ht(!1),onFocus:()=>ht(!0)},Tr?s.createElement("div",{role:"alert","aria-label":Tr}):null,s.createElement("div",{className:"action-bar comment-actions",style:{display:En?"flex":"none"}},s.createElement("button",{title:"Quote reply",className:"icon-button",onClick:()=>X.emit("quoteReply",oe)},Ee),O?s.createElement("button",{title:"Edit comment",className:"icon-button",onClick:()=>nt(!0)},dn):null,B?s.createElement("button",{title:"Delete comment",className:"icon-button",onClick:()=>$e({id:T,pullRequestReviewId:ve})},Fr):null),s.createElement(Gr,{comment:c,bodyHTML:He,body:oe,canApplyPatch:je.isCurrentlyCheckedOut,allowEmpty:!!o.allowEmpty}),f)}l(wt,"CommentView");function _t(o){return o.authorAssociation!==void 0}l(_t,"isReviewEvent");const Wt={PENDING:"will review",COMMENTED:"reviewed",CHANGES_REQUESTED:"requested changes",APPROVED:"approved"},Vn=l(o=>Wt[o]||"reviewed","reviewDescriptor");function yn({for:o,onFocus:a,onMouseEnter:f,onMouseLeave:c,children:m}){var v;const w="htmlUrl"in o?o.htmlUrl:o.url,T=(v=o.isDraft)!=null?v:_t(o)&&o.state.toLocaleUpperCase()==="PENDING",O="user"in o?o.user:o.author,B="createdAt"in o?o.createdAt:o.submittedAt;return s.createElement("div",{className:"comment-container comment review-comment",onFocus:a,onMouseEnter:f,onMouseLeave:c},s.createElement("div",{className:"review-comment-container"},s.createElement("h3",{className:"review-comment-header"},s.createElement(ml,null,s.createElement(Rt,{for:O}),s.createElement(Ot,{for:O}),_t(o)?bt(o):null,B?s.createElement(s.Fragment,null,_t(o)?Vn(o.state):"commented",lt,s.createElement(gn,{href:w,date:B})):s.createElement("em",null,"pending"),T?s.createElement(s.Fragment,null,s.createElement("span",{className:"pending-label"},"Pending")):null)),m))}l(yn,"CommentBox");function $n({id:o,body:a,onCancel:f,onSave:c}){const{updateDraft:m}=(0,s.useContext)($),v=(0,s.useRef)({body:a,dirty:!1}),w=(0,s.useRef)();(0,s.useEffect)(()=>{const oe=setInterval(()=>{v.current.dirty&&(m(o,v.current.body),v.current.dirty=!1)},500);return()=>clearInterval(oe)},[v]);const T=(0,s.useCallback)(async()=>{const{markdown:oe,submitButton:se}=w.current;se.disabled=!0;try{await c(oe.value)}finally{se.disabled=!1}},[w,c]),O=(0,s.useCallback)(oe=>{oe.preventDefault(),T()},[T]),B=(0,s.useCallback)(oe=>{(oe.metaKey||oe.ctrlKey)&&oe.key==="Enter"&&(oe.preventDefault(),T())},[T]),ve=(0,s.useCallback)(oe=>{v.current.body=oe.target.value,v.current.dirty=!0},[v]);return s.createElement("form",{ref:w,onSubmit:O},s.createElement("textarea",{name:"markdown",defaultValue:a,onKeyDown:B,onInput:ve}),s.createElement("div",{className:"form-actions"},s.createElement("button",{className:"secondary",onClick:f},"Cancel"),s.createElement("button",{type:"submit",name:"submitButton"},"Save")))}l($n,"EditComment");const Gr=l(({comment:o,bodyHTML:a,body:f,canApplyPatch:c,allowEmpty:m})=>{var v,w;if(!f&&!a)return m?null:s.createElement("div",{className:"comment-body"},s.createElement("em",null,"No description provided."));const{applyPatch:T}=(0,s.useContext)($),O=s.createElement("div",{dangerouslySetInnerHTML:{__html:a!=null?a:""}}),ve=((w=(v=f||a)==null?void 0:v.indexOf("```diff"))!=null?w:-1)>-1&&c&&o?s.createElement("button",{onClick:()=>T(o)},"Apply Patch"):s.createElement(s.Fragment,null);return s.createElement("div",{className:"comment-body"},O,ve)},"CommentBody");function El({pendingCommentText:o,state:a,hasWritePermission:f,isIssue:c,isAuthor:m,isDraft:v,continueOnGitHub:w,currentUserReviewState:T,lastReviewType:O,busy:B}){const{updatePR:ve,requestChanges:oe,approve:se,close:He,openOnGitHub:Ue,submit:$e}=(0,s.useContext)($),[Le,he]=(0,s.useState)(!1),je=(0,s.useRef)(),We=(0,s.useRef)();X.addListener("quoteReply",Ve=>{var st,Ft;const Ul=Ve.replace(/\n/g,`
> `);ve({pendingCommentText:`> ${Ul} 

`}),(st=We.current)==null||st.scrollIntoView(),(Ft=We.current)==null||Ft.focus()});const Lt=(0,s.useCallback)(Ve=>{var st,Ft;(Ve.metaKey||Ve.ctrlKey)&&Ve.key==="Enter"&&$e((Ft=(st=We.current)==null?void 0:st.value)!=null?Ft:"")},[$e]),nt=l(Ve=>{Ve.preventDefault();const{value:st}=We.current;He(st)},"closeButton");let En=O!=null?O:T==="APPROVED"?Te.Approve:T==="CHANGES_REQUESTED"?Te.RequestChanges:Te.Comment;async function ht(Ve){const{value:st}=We.current;if(w&&Ve!==Te.Comment){await Ue();return}switch(he(!0),Ve){case Te.RequestChanges:await oe(st);break;case Te.Approve:await se(st);break;default:await $e(st)}he(!1)}l(ht,"submitAction");async function Tr(){await ht(En)}l(Tr,"defaultSubmitAction");const mt=m?{[Te.Comment]:"Comment"}:w?{[Te.Comment]:"Comment",[Te.Approve]:"Approve on github.com",[Te.RequestChanges]:"Request changes on github.com"}:yr;return s.createElement("form",{id:"comment-form",ref:je,className:"comment-form main-comment-form",onSubmit:()=>{var Ve,st;return $e((st=(Ve=We.current)==null?void 0:Ve.value)!=null?st:"")}},s.createElement("textarea",{id:"comment-textarea",name:"body",ref:We,onInput:({target:Ve})=>ve({pendingCommentText:Ve.value}),onKeyDown:Lt,value:o,placeholder:"Leave a comment"}),s.createElement("div",{className:"form-actions"},(f||m)&&!c?s.createElement("button",{id:"close",className:"secondary",disabled:Le||a!==ie.Open,onClick:nt,"data-command":"close"},"Close Pull Request"):null,s.createElement(jt,{optionsContext:()=>wr(mt,o),defaultAction:Tr,defaultOptionLabel:()=>mt[En],defaultOptionValue:()=>En,allOptions:()=>{const Ve=[];return mt.approve&&Ve.push({label:mt[Te.Approve],value:Te.Approve,action:()=>ht(Te.Approve)}),mt.comment&&Ve.push({label:mt[Te.Comment],value:Te.Comment,action:()=>ht(Te.Comment)}),mt.requestChanges&&Ve.push({label:mt[Te.RequestChanges],value:Te.RequestChanges,action:()=>ht(Te.RequestChanges)}),Ve},optionsTitle:"Submit pull request review",disabled:Le||B,hasSingleAction:Object.keys(mt).length===1})))}l(El,"AddComment");const yr={comment:"Comment",approve:"Approve",requestChanges:"Request Changes"},wr=l((o,a)=>{const f={preventDefaultContextMenuItems:!0,"github:reviewCommentMenu":!0};return o.approve&&(o.approve===yr.approve?f["github:reviewCommentApprove"]=!0:f["github:reviewCommentApproveOnDotCom"]=!0),o.comment&&(f["github:reviewCommentComment"]=!0),o.requestChanges&&(o.requestChanges===yr.requestChanges?f["github:reviewCommentRequestChanges"]=!0:f["github:reviewCommentRequestChangesOnDotCom"]=!0),f.body=a!=null?a:"",JSON.stringify(f)},"makeCommentMenuContext"),kl=l(o=>{var a,f;const{updatePR:c,requestChanges:m,approve:v,submit:w,openOnGitHub:T}=useContext(PullRequestContext),[O,B]=useState(!1),ve=useRef();let oe=(a=o.lastReviewType)!=null?a:o.currentUserReviewState==="APPROVED"?ReviewType.Approve:o.currentUserReviewState==="CHANGES_REQUESTED"?ReviewType.RequestChanges:ReviewType.Comment;async function se(he){const{value:je}=ve.current;if(o.continueOnGitHub&&he!==ReviewType.Comment){await T();return}switch(B(!0),he){case ReviewType.RequestChanges:await m(je);break;case ReviewType.Approve:await v(je);break;default:await w(je)}B(!1)}l(se,"submitAction");async function He(){await se(oe)}l(He,"defaultSubmitAction");const Ue=l(he=>{c({pendingCommentText:he.target.value})},"onChangeTextarea"),$e=useCallback(he=>{(he.metaKey||he.ctrlKey)&&he.key==="Enter"&&(he.preventDefault(),He())},[se]),Le=o.isAuthor?{comment:"Comment"}:o.continueOnGitHub?{comment:"Comment",approve:"Approve on github.com",requestChanges:"Request changes on github.com"}:yr;return React.createElement("span",{className:"comment-form"},React.createElement("textarea",{id:"comment-textarea",name:"body",placeholder:"Leave a comment",ref:ve,value:(f=o.pendingCommentText)!=null?f:"",onChange:Ue,onKeyDown:$e,disabled:O||o.busy}),React.createElement("div",{className:"comment-button"},React.createElement(ContextDropdown,{optionsContext:()=>wr(Le,o.pendingCommentText),defaultAction:He,defaultOptionLabel:()=>Le[oe],defaultOptionValue:()=>oe,allOptions:()=>{const he=[];return Le.approve&&he.push({label:Le[ReviewType.Approve],value:ReviewType.Approve,action:()=>se(ReviewType.Approve)}),Le.comment&&he.push({label:Le[ReviewType.Comment],value:ReviewType.Comment,action:()=>se(ReviewType.Comment)}),Le.requestChanges&&he.push({label:Le[ReviewType.RequestChanges],value:ReviewType.RequestChanges,action:()=>se(ReviewType.RequestChanges)}),he},optionsTitle:"Submit pull request review",disabled:O||o.busy,hasSingleAction:Object.keys(Le).length===1})))},"AddCommentSimple");function jn({canEdit:o,state:a,head:f,base:c,title:m,titleHTML:v,number:w,url:T,author:O,isCurrentlyCheckedOut:B,isDraft:ve,isIssue:oe,repositoryDefaultBranch:se}){const[He,Ue]=ye(m),[$e,Le]=(0,s.useState)(!1);return s.createElement(s.Fragment,null,s.createElement(bl,{title:He,titleHTML:v,number:w,url:T,inEditMode:$e,setEditMode:Le,setCurrentTitle:Ue}),s.createElement(Cr,{state:a,head:f,base:c,author:O,isIssue:oe,isDraft:ve}),s.createElement(_l,{isCurrentlyCheckedOut:B,isIssue:oe,canEdit:o,repositoryDefaultBranch:se,setEditMode:Le}))}l(jn,"Header");function bl({title:o,titleHTML:a,number:f,url:c,inEditMode:m,setEditMode:v,setCurrentTitle:w}){const{setTitle:T}=(0,s.useContext)($);return m?s.createElement("form",{className:"editing-form title-editing-form",onSubmit:async oe=>{oe.preventDefault();try{const se=oe.target[0].value;await T(se),w(se)}finally{v(!1)}}},s.createElement("input",{type:"text",style:{width:"100%"},defaultValue:o}),s.createElement("div",{className:"form-actions"},s.createElement("button",{type:"button",className:"secondary",onClick:()=>v(!1)},"Cancel"),s.createElement("button",{type:"submit"},"Update"))):s.createElement("div",{className:"overview-title"},s.createElement("h2",null,s.createElement("span",{dangerouslySetInnerHTML:{__html:a}})," ",s.createElement("a",{href:c,title:c},"#",f)))}l(bl,"Title");function _l({isCurrentlyCheckedOut:o,canEdit:a,isIssue:f,repositoryDefaultBranch:c,setEditMode:m}){const{refresh:v,copyPrLink:w,copyVscodeDevLink:T}=(0,s.useContext)($);return s.createElement("div",{className:"button-group"},s.createElement(Ko,{isCurrentlyCheckedOut:o,isIssue:f,repositoryDefaultBranch:c}),s.createElement("button",{title:"Refresh with the latest data from GitHub",onClick:v,className:"secondary small-button"},"Refresh"),a&&s.createElement(s.Fragment,null,s.createElement("button",{title:"Rename",onClick:m,className:"secondary small-button"},"Rename"),s.createElement("button",{title:"Copy GitHub pull request link",onClick:w,className:"secondary small-button"},"Copy Link"),s.createElement("button",{title:"Copy vscode.dev link for viewing this pull request in VS Code for the Web",onClick:T,className:"secondary small-button"},"Copy vscode.dev Link")))}l(_l,"ButtonGroup");function Cr({state:o,isDraft:a,isIssue:f,author:c,base:m,head:v}){const{text:w,color:T,icon:O}=Ll(o,a);return s.createElement("div",{className:"subtitle"},s.createElement("div",{id:"status",className:`status-badge-${T}`},s.createElement("span",{className:"icon"},f?null:O),s.createElement("span",null,w)),s.createElement("div",{className:"author"},f?null:s.createElement(Rt,{for:c}),f?null:s.createElement("div",{className:"merge-branches"},s.createElement(Ot,{for:c})," ",Bn(o)," into"," ",s.createElement("code",{className:"branch-tag"},m)," from ",s.createElement("code",{className:"branch-tag"},v))))}l(Cr,"Subtitle");const Ko=l(({isCurrentlyCheckedOut:o,isIssue:a,repositoryDefaultBranch:f})=>{const{exitReviewMode:c,checkout:m}=(0,s.useContext)($),[v,w]=(0,s.useState)(!1),T=l(async O=>{try{switch(w(!0),O){case"checkout":await m();break;case"exitReviewMode":await c();break;default:throw new Error(`Can't find action ${O}`)}}finally{w(!1)}},"onClick");return o?s.createElement(s.Fragment,null,s.createElement("button",{"aria-live":"polite",className:"checkedOut small-button",disabled:!0},we,lt," Checked Out"),s.createElement("button",{"aria-live":"polite",title:"Switch to a different branch than this pull request branch",disabled:v,className:"small-button",onClick:()=>T("exitReviewMode")},"Checkout '",f,"'")):a?null:s.createElement("button",{"aria-live":"polite",title:"Checkout a local copy of this pull request branch to verify or edit changes",disabled:v,className:"small-button",onClick:()=>T("checkout")},"Checkout")},"CheckoutButtons");function Ll(o,a){return o===ie.Merged?{text:"Merged",color:"merged",icon:dt}:o===ie.Open?a?{text:"Draft",color:"draft",icon:ar}:{text:"Open",color:"open",icon:it}:{text:"Closed",color:"closed",icon:al}}l(Ll,"getStatus");function Bn(o){return o===ie.Merged?"merged changes":"wants to merge changes"}l(Bn,"getActionText");function Jr(o){const{reviewer:a,state:f}=o.reviewState,{reRequestReview:c}=(0,s.useContext)($),m=o.event?Ae(o.event):void 0;return s.createElement("div",{className:"section-item reviewer"},s.createElement("div",{className:"avatar-with-author"},s.createElement(Rt,{for:a}),s.createElement(Ot,{for:a})),s.createElement("div",{className:"reviewer-icons"},f!=="REQUESTED"?s.createElement("button",{className:"icon-button",title:"Re-request review",onClick:()=>c(o.reviewState.reviewer.id)},ul,"\uFE0F"):null,Yo[f],m?s.createElement("div",{role:"alert","aria-label":m}):null))}l(Jr,"Reviewer");const Yo={REQUESTED:(0,s.cloneElement)(ur,{className:"section-icon requested",title:"Awaiting requested review"}),COMMENTED:(0,s.cloneElement)(Ee,{className:"section-icon commented",Root:"div",title:"Left review comments"}),APPROVED:(0,s.cloneElement)(we,{className:"section-icon approved",title:"Approved these changes"}),CHANGES_REQUESTED:(0,s.cloneElement)(Dn,{className:"section-icon changes",title:"Requested changes"})},Xo=l(({busy:o,baseHasMergeQueue:a})=>o?s.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},"Setting..."):s.createElement("label",{htmlFor:"automerge-checkbox",className:"automerge-checkbox-label"},a?"Merge when ready":"Auto-merge"),"AutoMergeLabel"),eo=l(({updateState:o,baseHasMergeQueue:a,allowAutoMerge:f,defaultMergeMethod:c,mergeMethodsAvailability:m,autoMerge:v,isDraft:w})=>{if(!f&&!v||!m||!c)return null;const T=s.useRef(),[O,B]=s.useState(!1),ve=l(()=>{var oe,se;return(se=(oe=T.current)==null?void 0:oe.value)!=null?se:"merge"},"selectedMethod");return s.createElement("div",{className:"automerge-section"},s.createElement("div",{className:"automerge-checkbox-wrapper"},s.createElement("input",{id:"automerge-checkbox",type:"checkbox",name:"automerge",checked:v,disabled:!f||w||O,onChange:async()=>{B(!0),await o({autoMerge:!v,autoMergeMethod:ve()}),B(!1)}})),s.createElement(Xo,{busy:O,baseHasMergeQueue:a}),a?null:s.createElement("div",{className:"merge-select-container"},s.createElement(br,{ref:T,defaultMergeMethod:c,mergeMethodsAvailability:m,onChange:async()=>{B(!0),await o({autoMergeMethod:ve()}),B(!1)},disabled:O})))},"AutoMerge"),Tl=l(({mergeQueueEntry:o})=>{const a=s.useContext($);let f,c;switch(o.state){case fe.Mergeable:case fe.AwaitingChecks:case fe.Queued:{c=s.createElement("span",{className:"merge-queue-pending"},"Queued to merge..."),o.position===1?f=s.createElement("span",null,"This pull request is at the head of the ",s.createElement("a",{href:o.url},"merge queue"),"."):f=s.createElement("span",null,"This pull request is in the ",s.createElement("a",{href:o.url},"merge queue"),".");break}case fe.Locked:{c=s.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),f=s.createElement("span",null,"The base branch does not allow updates");break}case fe.Unmergeable:{c=s.createElement("span",{className:"merge-queue-blocked"},"Merging is blocked"),f=s.createElement("span",null,"There are conflicts with the base branch.");break}}return s.createElement("div",{className:"merge-queue-container"},s.createElement("div",{className:"merge-queue"},s.createElement("div",{className:"merge-queue-icon"}),s.createElement("div",{className:"merge-queue-title"},c),f),s.createElement("div",{className:"button-container"},s.createElement("button",{onClick:a.dequeue},"Remove from queue")))},"QueuedToMerge");var wn,Go=new Uint8Array(16);function to(){if(!wn&&(wn=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!wn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return wn(Go)}l(to,"rng");const Sl=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ml(o){return typeof o=="string"&&Sl.test(o)}l(Ml,"validate");const xr=Ml;for(var ke=[],rn=0;rn<256;++rn)ke.push((rn+256).toString(16).substr(1));function Nl(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,f=(ke[o[a+0]]+ke[o[a+1]]+ke[o[a+2]]+ke[o[a+3]]+"-"+ke[o[a+4]]+ke[o[a+5]]+"-"+ke[o[a+6]]+ke[o[a+7]]+"-"+ke[o[a+8]]+ke[o[a+9]]+"-"+ke[o[a+10]]+ke[o[a+11]]+ke[o[a+12]]+ke[o[a+13]]+ke[o[a+14]]+ke[o[a+15]]).toLowerCase();if(!xr(f))throw TypeError("Stringified UUID is invalid");return f}l(Nl,"stringify");const Pl=Nl;function Er(o,a,f){o=o||{};var c=o.random||(o.rng||to)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,a){f=f||0;for(var m=0;m<16;++m)a[f+m]=c[m];return a}return Pl(c)}l(Er,"v4");const no=Er;var Cn;(function(o){o[o.esc=27]="esc",o[o.down=40]="down",o[o.up=38]="up"})(Cn||(Cn={}));const Rl=l(({options:o,defaultOption:a,disabled:f,submitAction:c,changeAction:m})=>{const[v,w]=(0,s.useState)(a),[T,O]=(0,s.useState)(!1),B=no(),ve=`expandOptions${B}`,oe=l(()=>{O(!T)},"onClick"),se=l($e=>{w($e.target.value),O(!1);const Le=document.getElementById(`confirm-button${B}`);Le==null||Le.focus(),m&&m($e.target.value)},"onMethodChange"),He=l($e=>{if(T){const Le=document.activeElement;switch($e.keyCode){case 27:O(!1);const he=document.getElementById(ve);he==null||he.focus();break;case 40:if(!(Le==null?void 0:Le.id)||Le.id===ve){const je=document.getElementById(`${B}option0`);je==null||je.focus()}else{const je=new RegExp(`${B}option([0-9])`),We=Le.id.match(je);if(We==null?void 0:We.length){const Lt=parseInt(We[1]);if(Lt<Object.entries(o).length-1){const nt=document.getElementById(`${B}option${Lt+1}`);nt==null||nt.focus()}}}break;case 38:if(!(Le==null?void 0:Le.id)||Le.id===ve){const je=Object.entries(o).length-1,We=document.getElementById(`${B}option${je}`);We==null||We.focus()}else{const je=new RegExp(`${B}option([0-9])`),We=Le.id.match(je);if(We==null?void 0:We.length){const Lt=parseInt(We[1]);if(Lt>0){const nt=document.getElementById(`${B}option${Lt-1}`);nt==null||nt.focus()}}}break}}},"onKeyDown"),Ue=Object.entries(o).length===1?"hidden":T?"open":"";return s.createElement("div",{className:"select-container",onKeyDown:He},s.createElement("div",{className:"select-control"},s.createElement(Jo,{dropdownId:B,className:Object.keys(o).length>1?"select-left":"",options:o,selected:v,submitAction:c,disabled:!!f}),s.createElement("div",{className:"split"}),s.createElement("button",{id:ve,className:"select-right "+Ue,"aria-label":"Expand button options",onClick:oe},ze)),s.createElement("div",{className:T?"options-select":"hidden"},Object.entries(o).map(([$e,Le],he)=>s.createElement("button",{id:`${B}option${he}`,key:$e,value:$e,onClick:se},Le))))},"Dropdown");function Jo({dropdownId:o,className:a,options:f,selected:c,disabled:m,submitAction:v}){const[w,T]=(0,s.useState)(!1),O=l(async B=>{B.preventDefault();try{T(!0),await v(c)}finally{T(!1)}},"onSubmit");return s.createElement("form",{onSubmit:O},s.createElement("input",{disabled:w||m,type:"submit",className:a,id:`confirm-button${o}`,value:f[c]}))}l(Jo,"Confirm");const ei=l(({pr:o,isSimple:a})=>o.state===ie.Merged?s.createElement("div",{className:"branch-status-message"},s.createElement("div",{className:"branch-status-icon"},a?dt:null)," ","Pull request successfully merged."):o.state===ie.Closed?s.createElement("div",{className:"branch-status-message"},"This pull request is closed."):null,"PRStatusMessage"),Ol=l(({pr:o})=>o.state===ie.Open?null:s.createElement(lo,{...o}),"DeleteOption"),ro=l(({pr:o})=>{var a;const{state:f,status:c}=o,[m,v]=(0,s.useReducer)(w=>!w,(a=c==null?void 0:c.statuses.some(w=>w.state===Me.Failure))!=null?a:!1);return(0,s.useEffect)(()=>{var w;((w=c==null?void 0:c.statuses.some(T=>T.state===Me.Failure))!=null?w:!1)?m||v():m&&v()},c==null?void 0:c.statuses),f===ie.Open&&(c==null?void 0:c.statuses.length)?s.createElement(s.Fragment,null,s.createElement("div",{className:"status-section"},s.createElement("div",{className:"status-item"},s.createElement(on,{state:c.state}),s.createElement("p",{className:"status-item-detail-text"},Il(c.statuses)),s.createElement("button",{id:"status-checks-display-button",className:"secondary small-button",onClick:v},m?"Hide":"Show")),m?s.createElement(co,{statuses:c.statuses}):null)):null},"StatusChecks"),oo=l(({pr:o})=>{const{state:a,reviewRequirement:f}=o;return!f||a!==ie.Open?null:s.createElement(s.Fragment,null,s.createElement("div",{className:"status-section"},s.createElement("div",{className:"status-item"},s.createElement(ai,{state:f.state}),s.createElement("p",{className:"status-item-detail-text"},fo(f)))))},"RequiredReviewers"),ti=l(({pr:o,isSimple:a})=>{if(!a||o.state!==ie.Open||o.reviewers.length===0)return null;const f=[],c=new Set(o.reviewers);let m=o.events.length-1;for(;m>=0&&c.size>0;){const v=o.events[m];if(v.event===te.Reviewed){for(const w of c)if(v.user.id===w.reviewer.id){f.push({event:v,reviewState:w}),c.delete(w);break}}m--}return s.createElement("div",{className:"section"}," ",f.map(v=>s.createElement(Jr,{key:Se(v.reviewState.reviewer),...v})))},"InlineReviewers"),Dt=l(({pr:o,isSimple:a})=>o.isIssue?null:s.createElement("div",{id:"status-checks"},s.createElement(s.Fragment,null,s.createElement(ei,{pr:o,isSimple:a}),s.createElement(oo,{pr:o}),s.createElement(ro,{pr:o}),s.createElement(ti,{pr:o,isSimple:a}),s.createElement(kr,{pr:o,isSimple:a}),s.createElement(Ol,{pr:o}))),"StatusChecksSection"),kr=l(({pr:o,isSimple:a})=>{const{create:f,checkMergeability:c}=(0,s.useContext)($);if(a&&o.state!==ie.Open){const T="Create New Pull Request...";return s.createElement("div",{className:"branch-status-container"},s.createElement("form",null,s.createElement("button",{type:"submit",onClick:f},T)))}else if(o.state!==ie.Open)return null;const{mergeable:m}=o,[v,w]=(0,s.useState)(m);return m!==v&&m!==re.Unknown&&w(m),(0,s.useEffect)(()=>{const T=setInterval(async()=>{if(v===re.Unknown){const O=await c();w(O)}},3e3);return()=>clearInterval(T)},[v]),s.createElement("div",null,s.createElement(ri,{mergeable:v,isSimple:a,isCurrentlyCheckedOut:o.isCurrentlyCheckedOut,canUpdateBranch:o.canUpdateBranch}),s.createElement(oi,{mergeable:v,isSimple:a,isCurrentlyCheckedOut:o.isCurrentlyCheckedOut,canUpdateBranch:o.canUpdateBranch}),s.createElement(io,{pr:{...o,mergeable:v},isSimple:a}))},"MergeStatusAndActions"),ni=null,ri=l(({mergeable:o,isSimple:a,isCurrentlyCheckedOut:f,canUpdateBranch:c})=>{const{updateBranch:m}=(0,s.useContext)($),[v,w]=(0,s.useState)(!1),T=l(()=>{w(!0),m().finally(()=>w(!1))},"onClick");let O=ur,B="Checking if this branch can be merged...",ve=null;return o===re.Mergeable?(O=we,B="This branch has no conflicts with the base branch."):o===re.Conflict?(O=Pt,B="This branch has conflicts that must be resolved.",ve="Resolve conflicts"):o===re.NotMergeable?(O=Pt,B="Branch protection policy must be fulfilled before merging."):o===re.Behind&&(O=Pt,B="This branch is out-of-date with the base branch.",ve="Update with merge commit"),a&&(O=null,o!==re.Conflict&&(ve=null)),s.createElement("div",{className:"status-item status-section"},O,s.createElement("p",null,B),ve&&c?s.createElement("div",{className:"button-container"},s.createElement("button",{className:"secondary",onClick:T,disabled:v},ve)):null)},"MergeStatus"),oi=l(({mergeable:o,isSimple:a,isCurrentlyCheckedOut:f,canUpdateBranch:c})=>{const{updateBranch:m}=(0,s.useContext)($),[v,w]=(0,s.useState)(!1),T=l(()=>{w(!0),m().finally(()=>w(!1))},"update"),O=!f&&o===re.Conflict;return!c||O||a||o===re.Behind||o===re.Conflict||o===re.Unknown?null:s.createElement("div",{className:"status-item status-section"},pe,s.createElement("p",null,"This branch is out-of-date with the base branch."),s.createElement("button",{className:"secondary",onClick:T,disabled:v},"Update with merge commit"))},"OfferToUpdate"),ii=l(({isSimple:o})=>{const[a,f]=(0,s.useState)(!1),{readyForReview:c,updatePR:m}=(0,s.useContext)($),v=(0,s.useCallback)(async()=>{try{f(!0);const w=await c();m(w)}finally{f(!1)}},[f,c,m]);return s.createElement("div",{className:"ready-for-review-container"},s.createElement("div",{className:"ready-for-review-text-wrapper"},s.createElement("div",{className:"ready-for-review-icon"},o?null:pe),s.createElement("div",null,s.createElement("div",{className:"ready-for-review-heading"},"This pull request is still a work in progress."),s.createElement("div",{className:"ready-for-review-meta"},"Draft pull requests cannot be merged."))),s.createElement("div",{className:"button-container"},s.createElement("button",{disabled:a,onClick:v},"Ready for review")))},"ReadyForReview"),li=l(o=>{const a=(0,s.useContext)($),f=(0,s.useRef)(),[c,m]=(0,s.useState)(null);return o.mergeQueueMethod?s.createElement("div",null,s.createElement("div",{id:"merge-comment-form"},s.createElement("button",{onClick:()=>a.enqueue()},"Add to Merge Queue"))):c?s.createElement(so,{pr:o,method:c,cancel:()=>m(null)}):s.createElement("div",{className:"automerge-section wrapper"},s.createElement("button",{onClick:()=>m(f.current.value)},"Merge Pull Request"),lt,"using method",lt,s.createElement(br,{ref:f,...o}))},"Merge"),io=l(({pr:o,isSimple:a})=>{var f;const{hasWritePermission:c,canEdit:m,isDraft:v,mergeable:w}=o;if(v)return m?s.createElement(ii,{isSimple:a}):null;if(w===re.Mergeable&&c&&!o.mergeQueueEntry)return a?s.createElement(si,{...o}):s.createElement(li,{...o});if(!a&&c&&!o.mergeQueueEntry){const T=(0,s.useContext)($);return s.createElement(eo,{updateState:O=>T.updateAutoMerge(O),...o,baseHasMergeQueue:!!o.mergeQueueMethod,defaultMergeMethod:(f=o.autoMergeMethod)!=null?f:o.defaultMergeMethod})}else if(o.mergeQueueEntry)return s.createElement(Tl,{mergeQueueEntry:o.mergeQueueEntry});return null},"PrActions"),Dl=l(()=>{const{openOnGitHub:o}=useContext(PullRequestContext);return React.createElement("button",{id:"merge-on-github",type:"submit",onClick:()=>o()},"Merge on github.com")},"MergeOnGitHub"),si=l(o=>{const{merge:a,updatePR:f}=(0,s.useContext)($);async function c(v){const w=await a({title:"",description:"",method:v});f(w)}l(c,"submitAction");const m=Object.keys(Un).filter(v=>o.mergeMethodsAvailability[v]).reduce((v,w)=>(v[w]=Un[w],v),{});return s.createElement(Rl,{options:m,defaultOption:o.defaultMergeMethod,submitAction:c})},"MergeSimple"),lo=l(o=>{const{deleteBranch:a}=(0,s.useContext)($),[f,c]=(0,s.useState)(!1);return o.isRemoteHeadDeleted!==!1&&o.isLocalHeadDeleted!==!1?s.createElement("div",null):s.createElement("div",{className:"branch-status-container"},s.createElement("form",{onSubmit:async m=>{m.preventDefault();try{c(!0);const v=await a();v&&v.cancelled&&c(!1)}finally{c(!1)}}},s.createElement("button",{disabled:f,className:"secondary",type:"submit"},"Delete branch...")))},"DeleteBranch");function so({pr:o,method:a,cancel:f}){const{merge:c,updatePR:m,changeEmail:v}=(0,s.useContext)($),[w,T]=(0,s.useState)(!1),O=o.emailForCommit;return s.createElement("div",null,s.createElement("form",{id:"merge-comment-form",onSubmit:async B=>{B.preventDefault();try{T(!0);const{title:ve,description:oe}=B.target,se=await c({title:ve==null?void 0:ve.value,description:oe==null?void 0:oe.value,method:a,email:O});m(se)}finally{T(!1)}}},a==="rebase"?null:s.createElement("input",{type:"text",name:"title",defaultValue:ao(a,o)}),a==="rebase"?null:s.createElement("textarea",{name:"description",defaultValue:uo(a,o)}),a==="rebase"||!O?null:s.createElement("div",{className:"commit-association"},s.createElement("span",null,"Commit will be associated with ",s.createElement("button",{className:"input-box",title:"Change email","aria-label":"Change email",disabled:w,onClick:()=>{T(!0),v(O).finally(()=>T(!1))}},O))),s.createElement("div",{className:"form-actions",id:a==="rebase"?"rebase-actions":""},s.createElement("button",{className:"secondary",onClick:f},"Cancel"),s.createElement("button",{disabled:w,type:"submit",id:"confirm-merge"},a==="rebase"?"Confirm ":"",Un[a]))))}l(so,"ConfirmMerge");function ao(o,a){var f,c,m,v;switch(o){case"merge":return(c=(f=a.mergeCommitMeta)==null?void 0:f.title)!=null?c:`Merge pull request #${a.number} from ${a.head}`;case"squash":return(v=(m=a.squashCommitMeta)==null?void 0:m.title)!=null?v:`${a.title} (#${a.number})`;default:return""}}l(ao,"getDefaultTitleText");function uo(o,a){var f,c,m,v;switch(o){case"merge":return(c=(f=a.mergeCommitMeta)==null?void 0:f.description)!=null?c:a.title;case"squash":return(v=(m=a.squashCommitMeta)==null?void 0:m.description)!=null?v:"";default:return""}}l(uo,"getDefaultDescriptionText");const Un={merge:"Create Merge Commit",squash:"Squash and Merge",rebase:"Rebase and Merge"},br=s.forwardRef(({defaultMergeMethod:o,mergeMethodsAvailability:a,onChange:f,ariaLabel:c,name:m,title:v,disabled:w},T)=>s.createElement("select",{ref:T,defaultValue:o,onChange:f,disabled:w,"aria-label":c!=null?c:"Select merge method",name:m,title:v},Object.entries(Un).map(([O,B])=>s.createElement("option",{key:O,value:O,disabled:!a[O]},B,a[O]?null:" (not enabled)")))),co=l(({statuses:o})=>s.createElement("div",{className:"status-scroll"},o.map(a=>s.createElement("div",{key:a.id,className:"status-check"},s.createElement("div",{className:"status-check-details"},s.createElement(on,{state:a.state}),s.createElement(Rt,{for:{avatarUrl:a.avatarUrl,url:a.url}}),s.createElement("span",{className:"status-check-detail-text"},a.context," ",a.description?`\u2014 ${a.description}`:"")),s.createElement("div",null,a.isRequired?s.createElement("span",{className:"label"},"Required"):null,a.targetUrl?s.createElement("a",{href:a.targetUrl,title:a.targetUrl},"Details"):null)))),"StatusCheckDetails");function Il(o){const a=In(o,c=>{switch(c.state){case Me.Success:case Me.Failure:case Me.Neutral:return c.state;default:return Me.Pending}}),f=[];for(const c of Object.keys(a)){const m=a[c].length;let v="";switch(c){case Me.Success:v="successful";break;case Me.Failure:v="failed";break;case Me.Neutral:v="skipped";break;default:v="pending"}const w=m>1?`${m} ${v} checks`:`${m} ${v} check`;f.push(w)}return f.join(" and ")}l(Il,"getSummaryLabel");function on({state:o}){switch(o){case Me.Neutral:return xe;case Me.Success:return we;case Me.Failure:return Pt}return ur}l(on,"StateIcon");function ai({state:o}){switch(o){case Me.Pending:return Dn;case Me.Failure:return Pt}return we}l(ai,"RequiredReviewStateIcon");function fo(o){const a=o.approvals.length,f=o.requestedChanges.length,c=o.count;switch(o.state){case Me.Failure:return`At least ${c} approving review${c>1?"s":""} is required by reviewers with write access.`;case Me.Pending:return`${f} review${f>1?"s":""} requesting changes by reviewers with write access.`}return`${a} approving review${a>1?"s":""} by reviewers with write access.`}l(fo,"getRequiredReviewSummary");function qt(o){const{name:a,canDelete:f,color:c}=o,m=fr(c,o.isDarkTheme,!1);return s.createElement("div",{className:"section-item label",style:{backgroundColor:m.backgroundColor,color:m.textColor,borderColor:`${m.borderColor}`,paddingRight:f?"2px":"8px"}},a,o.children)}l(qt,"Label");function mo(o){const{name:a,color:f}=o,c=gitHubLabelColor(f,o.isDarkTheme,!1);return React.createElement("li",{style:{backgroundColor:c.backgroundColor,color:c.textColor,borderColor:`${c.borderColor}`}},a,o.children)}l(mo,"LabelCreate");function Wn({reviewers:o,labels:a,hasWritePermission:f,isIssue:c,projectItems:m,milestone:v,assignees:w}){const{addReviewers:T,addAssignees:O,addAssigneeYourself:B,addLabels:ve,removeLabel:oe,changeProjects:se,addMilestone:He,updatePR:Ue,pr:$e}=(0,s.useContext)($),Le=l(async()=>{const he=await se();Ue({...he})},"updateProjects");return s.createElement("div",{id:"sidebar"},c?"":s.createElement("div",{id:"reviewers",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const he=await T();Ue({reviewers:he.reviewers})}},s.createElement("div",{className:"section-title"},"Reviewers"),f?s.createElement("button",{className:"icon-button",title:"Add Reviewers"},fn):null),o&&o.length?o.map(he=>s.createElement(Jr,{key:Se(he.reviewer),reviewState:he})):s.createElement("div",{className:"section-placeholder"},"None yet")),s.createElement("div",{id:"assignees",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const he=await O();Ue({assignees:he.assignees})}},s.createElement("div",{className:"section-title"},"Assignees"),f?s.createElement("button",{className:"icon-button",title:"Add Assignees"},fn):null),w&&w.length?w.map((he,je)=>s.createElement("div",{key:je,className:"section-item reviewer"},s.createElement("div",{className:"avatar-with-author"},s.createElement(Rt,{for:he}),s.createElement(Ot,{for:he})))):s.createElement("div",{className:"section-placeholder"},"None yet",$e.hasWritePermission?s.createElement(s.Fragment,null,"\u2014",s.createElement("a",{className:"assign-yourself",onClick:async()=>{const he=await B();Ue({assignees:he.assignees})}},"assign yourself")):null)),s.createElement("div",{id:"labels",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const he=await ve();Ue({labels:he.added})}},s.createElement("div",{className:"section-title"},"Labels"),f?s.createElement("button",{className:"icon-button",title:"Add Labels"},fn):null),a.length?s.createElement("div",{className:"labels-list"},a.map(he=>s.createElement(qt,{key:he.name,...he,canDelete:f,isDarkTheme:$e.isDarkTheme},f?s.createElement("button",{className:"icon-button",onClick:()=>oe(he.name)},Pt,"\uFE0F"):null))):s.createElement("div",{className:"section-placeholder"},"None yet")),$e.isEnterprise?null:s.createElement("div",{id:"project",className:"section"},s.createElement("div",{className:"section-header",onClick:Le},s.createElement("div",{className:"section-title"},"Project"),f?s.createElement("button",{className:"icon-button",title:"Add Project"},fn):null),m?m.length>0?m.map(he=>s.createElement(Zn,{key:he.project.title,...he,canDelete:f})):s.createElement("div",{className:"section-placeholder"},"None Yet"):s.createElement("a",{onClick:Le},"Sign in with more permissions to see projects")),s.createElement("div",{id:"milestone",className:"section"},s.createElement("div",{className:"section-header",onClick:async()=>{const he=await He();Ue({milestone:he.added})}},s.createElement("div",{className:"section-title"},"Milestone"),f?s.createElement("button",{className:"icon-button",title:"Add Milestone"},fn):null),v?s.createElement(qn,{key:v.title,...v,canDelete:f}):s.createElement("div",{className:"section-placeholder"},"No milestone")))}l(Wn,"Sidebar");function qn(o){const{removeMilestone:a,updatePR:f,pr:c}=(0,s.useContext)($),m=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),v=fr(m,c.isDarkTheme,!1),{canDelete:w,title:T}=o;return s.createElement("div",{className:"labels-list"},s.createElement("div",{className:"section-item label",style:{backgroundColor:v.backgroundColor,color:v.textColor,borderColor:`${v.borderColor}`}},T,w?s.createElement("button",{className:"icon-button",onClick:async()=>{await a(),f({milestone:void 0})}},Pt,"\uFE0F"):null))}l(qn,"Milestone");function Zn(o){const{removeProject:a,updatePR:f,pr:c}=(0,s.useContext)($),m=getComputedStyle(document.documentElement).getPropertyValue("--vscode-badge-foreground"),v=fr(m,c.isDarkTheme,!1),{canDelete:w}=o;return s.createElement("div",{className:"labels-list"},s.createElement("div",{className:"section-item label",style:{backgroundColor:v.backgroundColor,color:v.textColor,borderColor:`${v.borderColor}`}},o.project.title,w?s.createElement("button",{className:"icon-button",onClick:async()=>{var T;await a(o),f({projectItems:(T=c.projectItems)==null?void 0:T.filter(O=>O.id!==o.id)})}},Pt,"\uFE0F"):null))}l(Zn,"Project");var Zt;(function(o){o[o.ADD=0]="ADD",o[o.COPY=1]="COPY",o[o.DELETE=2]="DELETE",o[o.MODIFY=3]="MODIFY",o[o.RENAME=4]="RENAME",o[o.TYPE=5]="TYPE",o[o.UNKNOWN=6]="UNKNOWN",o[o.UNMERGED=7]="UNMERGED"})(Zt||(Zt={}));class po{constructor(a,f,c,m,v,w,T){this.baseCommit=a,this.status=f,this.fileName=c,this.previousFileName=m,this.patch=v,this.diffHunks=w,this.blobUrl=T}}l(po,"file_InMemFileChange");class It{constructor(a,f,c,m,v){this.baseCommit=a,this.blobUrl=f,this.status=c,this.fileName=m,this.previousFileName=v}}l(It,"file_SlimFileChange");var ui=Object.defineProperty,ci=l((o,a,f)=>(typeof a!="symbol"&&(a+=""),a in o?ui(o,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[a]=f),"diffHunk_publicField"),ho;(function(o){o[o.Context=0]="Context",o[o.Add=1]="Add",o[o.Delete=2]="Delete",o[o.Control=3]="Control"})(ho||(ho={}));class Qn{constructor(a,f,c,m,v,w=!0){this.type=a,this.oldLineNumber=f,this.newLineNumber=c,this.positionInHunk=m,this._raw=v,this.endwithLineBreak=w}get raw(){return this._raw}get text(){return this._raw.substr(1)}}l(Qn,"DiffLine");function Al(o){switch(o[0]){case" ":return 0;case"+":return 1;case"-":return 2;default:return 3}}l(Al,"getDiffChangeType");class ln{constructor(a,f,c,m,v){this.oldLineNumber=a,this.oldLength=f,this.newLineNumber=c,this.newLength=m,this.positionInHunk=v,ci(this,"diffLines",[])}}l(ln,"DiffHunk");const At=/^@@ \-(\d+)(,(\d+))?( \+(\d+)(,(\d+)?)?)? @@/;function vo(o){let a=0,f=0;for(;(f=o.indexOf("\r",f))!==-1;)f++,a++;return a}l(vo,"countCarriageReturns");function*_r(o){let a=0;for(;a!==-1&&a<o.length;){const f=a;a=o.indexOf(`
`,a);let m=(a!==-1?a:o.length)-f;a!==-1&&(a>0&&o[a-1]==="\r"&&m--,a++),yield o.substr(f,m)}}l(_r,"LineReader");function*go(o){const a=_r(o);let f=a.next(),c,m=-1,v=-1,w=-1;for(;!f.done;){const T=f.value;if(At.test(T)){c&&(yield c,c=void 0),m===-1&&(m=0);const O=At.exec(T),B=v=Number(O[1]),ve=Number(O[3])||1,oe=w=Number(O[5]),se=Number(O[7])||1;c=new ln(B,ve,oe,se,m),c.diffLines.push(new Qn(3,-1,-1,m,T))}else if(c){const O=Al(T);if(O===3)c.diffLines&&c.diffLines.length&&(c.diffLines[c.diffLines.length-1].endwithLineBreak=!1);else{c.diffLines.push(new Qn(O,O!==1?v:-1,O!==2?w:-1,m,T));const B=1+vo(T);switch(O){case 0:v+=B,w+=B;break;case 2:v+=B;break;case 1:w+=B;break}}}m!==-1&&++m,f=a.next()}c&&(yield c)}l(go,"parseDiffHunk");function Lr(o){const a=go(o);let f=a.next();const c=[],m=[];for(;!f.done;){const v=f.value;c.push(v);for(let w=0;w<v.diffLines.length;w++){const T=v.diffLines[w];if(!(T.type===2||T.type===3))if(T.type===1)m.push(T.text);else{const O=T.text;m.push(O)}}f=a.next()}return c}l(Lr,"parsePatch");function yo(o,a){const f=o.split(/\r?\n/),c=go(a);let m=c.next();const v=[],w=[];let T=0,O=!0;for(;!m.done;){const B=m.value;v.push(B);const ve=B.oldLineNumber;for(let oe=T+1;oe<ve;oe++)w.push(f[oe-1]);T=ve+B.oldLength-1;for(let oe=0;oe<B.diffLines.length;oe++){const se=B.diffLines[oe];if(!(se.type===2||se.type===3))if(se.type===1)w.push(se.text);else{const He=se.text;w.push(He)}}if(m=c.next(),m.done){for(let oe=B.diffLines.length-1;oe>=0;oe--)if(B.diffLines[oe].type!==2){O=B.diffLines[oe].endwithLineBreak;break}}}if(O)if(T<f.length)for(let B=T+1;B<=f.length;B++)w.push(f[B-1]);else w.push("");return w.join(`
`)}l(yo,"getModifiedContentFromDiffHunk");function ft(o){switch(o){case"removed":return GitChangeType.DELETE;case"added":return GitChangeType.ADD;case"renamed":return GitChangeType.RENAME;case"modified":return GitChangeType.MODIFY;default:return GitChangeType.UNKNOWN}}l(ft,"getGitChangeType");async function Bs(o,a){var f;const c=[];for(let m=0;m<o.length;m++){const v=o[m],w=ft(v.status);if(!v.patch&&w!==GitChangeType.RENAME&&w!==GitChangeType.MODIFY&&!(w===GitChangeType.ADD&&v.additions===0)){c.push(new SlimFileChange(a,v.blob_url,w,v.filename,v.previous_filename));continue}const T=v.patch?Lr(v.patch):[];c.push(new InMemFileChange(a,w,v.filename,v.previous_filename,(f=v.patch)!=null?f:"",T,v.blob_url))}return c}l(Bs,"parseDiff");function Hl({hunks:o}){return s.createElement("div",{className:"diff"},o.map((a,f)=>s.createElement(Fl,{key:f,hunk:a})))}l(Hl,"Diff");const di=Hl,Fl=l(({hunk:o,maxLines:a=8})=>s.createElement(s.Fragment,null,o.diffLines.slice(-a).map(f=>s.createElement("div",{key:zl(f),className:`diffLine ${wo(f.type)}`},s.createElement(fi,{num:f.oldLineNumber}),s.createElement(fi,{num:f.newLineNumber}),s.createElement("div",{className:"diffTypeSign"},f._raw.substr(0,1)),s.createElement("div",{className:"lineContent"},f._raw.substr(1))))),"Hunk"),zl=l(o=>`${o.oldLineNumber}->${o.newLineNumber}`,"keyForDiffLine"),fi=l(({num:o})=>s.createElement("div",{className:"lineNumber"},o>0?o:" "),"LineNumber"),wo=l(o=>ho[o].toLowerCase(),"getDiffChangeClass"),Kn=l(({events:o})=>s.createElement(s.Fragment,null,o.map(a=>{switch(a.event){case te.Committed:return s.createElement(mi,{key:`commit${a.id}`,...a});case te.Reviewed:return s.createElement(vi,{key:`review${a.id}`,...a});case te.Commented:return s.createElement(Vl,{key:`comment${a.id}`,...a});case te.Merged:return s.createElement($l,{key:`merged${a.id}`,...a});case te.Assigned:return s.createElement(Bl,{key:`assign${a.id}`,...a});case te.HeadRefDeleted:return s.createElement(jl,{key:`head${a.id}`,...a});case te.NewCommitsSinceReview:return s.createElement(pi,{key:`newCommits${a.id}`});default:throw new Wr(a)}})),"Timeline"),Us=null,mi=l(o=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},Re,lt,s.createElement("div",{className:"avatar-container"},s.createElement(Rt,{for:o.author})),s.createElement(Ot,{for:o.author}),s.createElement("div",{className:"message-container"},s.createElement("a",{className:"message",href:o.htmlUrl,title:o.htmlUrl},o.message.substr(0,o.message.indexOf(`
`)>-1?o.message.indexOf(`
`):o.message.length)))),s.createElement("div",{className:"timeline-detail"},s.createElement("a",{className:"sha",href:o.htmlUrl,title:o.htmlUrl},o.sha.slice(0,7)),s.createElement(gn,{date:o.authoredDate}))),"CommitEventView"),pi=l(()=>{const{gotoChangesSinceReview:o}=(0,s.useContext)($);return s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},en,lt,s.createElement("span",{style:{fontWeight:"bold"}},"New changes since your last Review")),s.createElement("button",{"aria-live":"polite",title:"View the changes since your last review",onClick:()=>o()},"View Changes"))},"NewCommitsSinceReviewEventView"),Ht=l(o=>o.position!==null?`pos:${o.position}`:`ori:${o.originalPosition}`,"positionKey"),hi=l(o=>In(o,a=>a.path+":"+Ht(a)),"groupCommentsByPath"),vi=l(o=>{const a=hi(o.comments),f=o.state==="PENDING";return s.createElement(wt,{comment:o,allowEmpty:!0},o.comments.length?s.createElement("div",{className:"comment-body review-comment-body"},Object.entries(a).map(([c,m])=>s.createElement(gi,{key:c,thread:m,event:o}))):null,f?s.createElement(xn,null):null)},"ReviewEventView");function gi({thread:o,event:a}){var f;const c=o[0],[m,v]=(0,s.useState)(!c.isResolved),[w,T]=(0,s.useState)(!!c.isResolved),{openDiff:O,toggleResolveComment:B}=(0,s.useContext)($),ve=a.reviewThread&&(a.reviewThread.canResolve&&!a.reviewThread.isResolved||a.reviewThread.canUnresolve&&a.reviewThread.isResolved),oe=l(()=>{if(a.reviewThread){const se=!w;v(!se),T(se),B(a.reviewThread.threadId,o,se)}},"toggleResolve");return s.createElement("div",{key:a.id,className:"diff-container"},s.createElement("div",{className:"resolved-container"},s.createElement("div",null,c.position===null?s.createElement("span",null,s.createElement("span",null,c.path),s.createElement("span",{className:"outdatedLabel"},"Outdated")):s.createElement("a",{className:"diffPath",onClick:()=>O(c)},c.path),!w&&!m?s.createElement("span",{className:"unresolvedLabel"},"Unresolved"):null),s.createElement("button",{className:"secondary",onClick:()=>v(!m)},m?"Hide":"Show")),m?s.createElement("div",null,s.createElement(di,{hunks:(f=c.diffHunks)!=null?f:[]}),o.map(se=>s.createElement(wt,{key:se.id,comment:se})),ve?s.createElement("div",{className:"resolve-comment-row"},s.createElement("button",{className:"secondary comment-resolve",onClick:()=>oe()},w?"Unresolve Conversation":"Resolve Conversation")):null):null)}l(gi,"CommentThread");function xn(){const{requestChanges:o,approve:a,submit:f,pr:c}=(0,s.useContext)($),{isAuthor:m}=c,v=(0,s.useRef)();return s.createElement("form",null,s.createElement("textarea",{id:"pending-review",ref:v,placeholder:"Leave a review summary comment"}),s.createElement("div",{className:"form-actions"},m?null:s.createElement("button",{id:"request-changes",className:"secondary",onClick:w=>{w.preventDefault(),o(v.current.value)}},"Request Changes"),m?null:s.createElement("button",{id:"approve",className:"secondary",onClick:w=>{w.preventDefault(),a(v.current.value)}},"Approve"),s.createElement("button",{onClick:w=>{w.preventDefault(),f(v.current.value)}},"Submit Review")))}l(xn,"AddReviewSummaryComment");const Vl=l(o=>s.createElement(wt,{headerInEditMode:!0,comment:o}),"CommentEventView"),$l=l(o=>{const{revert:a,pr:f}=(0,s.useContext)($);return s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},dt,lt,s.createElement("div",{className:"avatar-container"},s.createElement(Rt,{for:o.user})),s.createElement(Ot,{for:o.user}),s.createElement("div",{className:"message"},"merged commit",lt,s.createElement("a",{className:"sha",href:o.commitUrl,title:o.commitUrl},o.sha.substr(0,7)),lt,"into ",o.mergeRef,lt),s.createElement(gn,{href:o.url,date:o.createdAt})),f.revertable?s.createElement("div",{className:"timeline-detail"},s.createElement("button",{className:"secondary",disabled:f.busy,onClick:a},"Revert")):null)},"MergedEventView"),jl=l(o=>s.createElement("div",{className:"comment-container commit"},s.createElement("div",{className:"commit-message"},s.createElement("div",{className:"avatar-container"},s.createElement(Rt,{for:o.actor})),s.createElement(Ot,{for:o.actor}),s.createElement("div",{className:"message"},"deleted the ",o.headRef," branch",lt),s.createElement(gn,{date:o.createdAt}))),"HeadDeleteEventView"),Bl=l(o=>null,"AssignEventView"),yi=l(o=>s.createElement(s.Fragment,null,s.createElement("div",{id:"title",className:"title"},s.createElement("div",{className:"details"},s.createElement(jn,{...o}))),s.createElement(Wn,{...o}),s.createElement("div",{id:"main"},s.createElement("div",{id:"description"},s.createElement(wt,{isPRDescription:!0,comment:o})),s.createElement(Kn,{events:o.events}),s.createElement(Dt,{pr:o,isSimple:!1}),s.createElement(El,{...o}))),"Overview");function wi(){(0,ne.render)(s.createElement(Ci,null,o=>s.createElement(yi,{...o})),document.getElementById("app"))}l(wi,"main");function Ci({children:o}){const a=(0,s.useContext)($),[f,c]=(0,s.useState)(a.pr);return(0,s.useEffect)(()=>{a.onchange=c,c(a.pr)},[]),window.onscroll=W(()=>{a.postMessage({command:"scroll",args:{scrollPosition:{x:window.scrollX,y:window.scrollY}}})},200),a.postMessage({command:"ready"}),a.postMessage({command:"pr.debug",args:"initialized "+(f?"with PR":"without PR")}),f?o(f):s.createElement("div",{className:"loading-indicator"},"Loading...")}l(Ci,"Root"),addEventListener("load",wi)})()})();
