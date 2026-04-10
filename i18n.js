const uiTranslations = {
    'en': {
        // App Header & Sidebar
        'app_title': 'App Store Screenshot Generator',
        'project': 'Project',
        'edit_languages': 'Edit Languages...',
        'translate_all_btn': 'Translate All...',
        'magical_titles_title': 'Magical Titles - AI-generated headlines',
        'about_title': 'About',
        'settings_title': 'Settings',
        'default_project': 'Default Project',
        'screenshots': 'Screenshots',
        'add_screenshots': 'Add Screenshots',
        'blank_screen': 'Blank Screen',
        'export_all': 'Export All',
        'export_current_title': 'Export current screenshot',
        'export_all_title': 'Export all screenshots as ZIP',
        'new_project_title': 'New Project',
        'rename_project_title': 'Rename Project',
        'delete_project_title': 'Delete Project',

        // Tabs
        'tab_background': 'Background',
        'tab_device': 'Device',
        'tab_text': 'Text',
        'tab_elements': 'Elements',
        'tab_popouts': 'Popouts',

        // Background Tab
        'bg_type': 'Background Type',
        'bg_gradient': 'Gradient',
        'bg_solid': 'Solid',
        'bg_image': 'Image',
        'bg_presets': 'Gradient Presets',
        'bg_direction': 'Gradient Direction',
        'bg_colors': 'Colors',
        'bg_add_color': 'Add Color Stop',
        'bg_image_fit': 'Image Fit',
        'bg_cover': 'Cover',
        'bg_contain': 'Contain',
        'bg_fill': 'Fill',
        'bg_blur': 'Blur',
        'bg_overlay': 'Overlay Color',
        'bg_opacity': 'Opacity',
        'bg_noise': 'Noise',
        'bg_noise_intensity': 'Intensity',

        // Device Tab
        'device_type': 'Device Type',
        'device_2d': '2D',
        'device_3d': '3D',
        'device_model': 'Device Model',
        'device_rotation_x': 'Rotation X',
        'device_rotation_y': 'Rotation Y',
        'device_rotation_z': 'Rotation Z',
        'device_presets': 'Position Presets',
        'device_scale': 'Screenshot Scale',
        'device_y': 'Vertical Position',
        'device_x': 'Horizontal Position',
        'device_radius': 'Corner Radius',
        'device_tilt': 'Tilt / Rotation',
        'device_shadow': 'Shadow',
        'device_border': 'Border',
        'device_frame_color': 'Frame Color',
        'device_corner_radius': 'Corner Radius',
        'device_rotation': 'Tilt / Rotation',
        'device_shadow_color': 'Shadow Color',
        'device_shadow_blur': 'Blur',
        'device_shadow_opacity': 'Opacity',
        'device_shadow_y': 'Offset Y',
        'device_shadow_x': 'Offset X',
        'device_border_color': 'Border Color',
        'device_border_width': 'Border Width',
        'device_border_opacity': 'Border Opacity',

        // Text Tab
        'text_headline': 'Headline',
        'text_subheadline': 'Subheadline',
        'text_enabled': 'Enabled',
        'text_content': 'Content',
        'text_font': 'Font',
        'text_size': 'Font Size',
        'text_weight': 'Weight',
        'text_color': 'Color',
        'text_position': 'Position',
        'text_offset_y': 'Offset Y',
        'text_line_height': 'Line Height',
        'text_translate_action': 'Translate to all languages...',
        'text_ai_action': 'Auto-translate with AI',
        'text_lang_layout': 'Per-language layout',
        'text_pos_top': 'Top',
        'text_pos_bottom': 'Bottom',
        'text_offset': 'Vertical Offset',
        'text_opacity': 'Opacity',
        'fonts_search': 'Search fonts...',
        'fonts_cat_popular': 'Popular',
        'fonts_cat_system': 'System',
        'fonts_cat_all': 'All',
        'layer_behind': 'Behind',
        'layer_middle': 'Middle',
        'layer_front': 'Front',
        'layer_label': 'Layer',
        'element_label': 'Element',
        'element_text_label': 'Text Element',
        'layer_behind_full': 'Behind Screenshot',
        'layer_middle_full': 'Above Screenshot',
        'layer_front_full': 'Above Text',

        // Elements Tab
        'elements_add': 'Add Elements',
        'elements_text': 'Text',
        'elements_image': 'Image',
        'elements_shape': 'Shape',
        'elements_list': 'Project Elements',
        'elements_none': 'No elements in this project',
        'elements_hint': 'Add graphics, text, emoji, or icons',
        'elements_emoji': 'Emoji',
        'elements_icon': 'Icon',
        'elements_search_emoji': 'Search emoji...',
        'elements_search_icon': 'Search icons...',
        'elements_cat_popular': 'Popular',
        'elements_cat_smileys': 'Smileys',
        'elements_cat_objects': 'Objects',
        'elements_cat_symbols': 'Symbols',
        'elements_cat_animals': 'Animals',
        'elements_cat_food': 'Food',
        'elements_cat_travel': 'Travel',
        'elements_cat_flags': 'Flags',
        'elements_cat_all': 'All',

        // Popouts Tab
        'popouts_title': 'Popouts',
        'popouts_desc': 'Add 3D elements that pop out from the device screen',
        'popouts_coming_soon': 'Coming Soon',

        // Modals - Settings
        'settings_header': 'Settings',
        'settings_api_provider': 'AI Provider',
        'settings_api_key': 'API Key',
        'settings_model': 'Model',
        'settings_appearance': 'Appearance',
        'settings_theme_auto': 'Auto',
        'settings_theme_light': 'Light',
        'settings_theme_dark': 'Dark',
        'settings_ui_language': 'UI Language',
        'settings_cancel': 'Cancel',
        'settings_save': 'Save Settings',

        // Modals - About
        'about_header': 'App Store Screenshot Generator',
        'about_desc': 'A free vibe coded tool for creating beautiful App Store screenshots with customizable backgrounds, text overlays, and device frames.',
        'about_created_by': 'Created by',
        'about_license': 'This project is free and open source under the MIT License.',
        'about_links': 'Live Version · GitHub Repo',
        'about_close': 'Close',

        // Modals - Languages
        'languages_header': 'Project Languages',
        'languages_desc': 'Manage the languages available for text in this project.',
        'languages_add': 'Add a language...',
        'languages_done': 'Done',

        // Modals - Screenshot Translations
        'trans_header': 'Screenshot Translations',
        'trans_desc': 'Upload localized versions of this screenshot for each language.',
        'trans_done': 'Done',

        // Modals - Export
        'export_header': 'Export Screenshots',
        'export_desc': 'Choose which language versions to export.',
        'export_current_only': 'Current Language Only',
        'export_all_langs': 'All Languages',
        'export_all_langs_desc': 'Separate folder per language',
        'export_cancel': 'Cancel',

        // Modals - Duplicate
        'dup_header': 'Screenshot Already Exists',
        'dup_desc': 'A screenshot with this filename already exists. What would you like to do?',
        'dup_existing': 'Existing',
        'dup_new': 'New',
        'dup_replace': 'Replace Existing',
        'dup_keep_both': 'Keep Both (Rename)',
        'dup_skip': 'Skip',

        // Messages & Alerts
        'msg_no_screenshots': 'Upload screenshots to get started',
        'msg_delete_project_confirm': 'Are you sure you want to delete this project?',
        'msg_delete_last_project': 'Cannot delete the only project',
        'msg_enter_project_name': 'Please enter a project name',
        'msg_rename_project': 'Rename Project',
        'msg_new_project': 'New Project',
        'msg_success_translated': 'Successfully translated {count} text(s)!',
        'msg_api_key_saved': '✓ API key is saved',
        'btn_create': 'Create',
        'btn_rename': 'Rename',
        'text_loading': 'Loading...',
        'element_text_type': 'Element Text',
        'msg_api_key_required': 'Add your LLM API key in Settings to use AI translation.',
        'msg_connection_failed': 'Connection failed. Check your API key in Settings.',
        'msg_invalid_api_key': 'Invalid API key. Update it in Settings (gear icon).',
        'msg_add_languages_first': 'Add more languages to your project first (via the language menu).',
        'msg_upload_first': 'Please upload a screenshot first',
        'msg_upload_multiple_first': 'Please upload screenshots first',
        'msg_no_text': 'No text found in {lang}. Add headlines or subheadlines first.',

        // Device Names
        'device_iphone_6.9': 'iPhone 6.9"',
        'device_iphone_6.7': 'iPhone 6.7"',
        'device_iphone_6.5': 'iPhone 6.5"',
        'device_iphone_5.5': 'iPhone 5.5"',
        'device_ipad_12.9': 'iPad 12.9"',
        'device_ipad_11': 'iPad 11"',
        'device_android_phone': 'Android Phone',
        'device_android_phone_hd': 'Android Phone HD',
        'device_android_tablet_7': 'Android Tablet 7"',
        'device_android_tablet_10': 'Android Tablet 10"',
        'device_og': 'Open Graph',
        'device_twitter': 'Twitter/X Card',
        'device_hero': 'Website Hero',
        'device_feature': 'Feature Graphic',
        'device_custom': 'Custom Size',
        'device_custom_desc': 'Set dimensions',
        'count_screenshots': '{count} screenshots',
        'count_screenshots_single': '1 screenshot',

        // Magical Titles
        'magical_titles_generating': 'Generating Magical Titles...',
        'magical_titles_analyzing': 'Analyzing {count} screenshots with AI...',
        'magical_titles_using': 'Using',
        'msg_magical_titles_success': 'Generated titles for {count} screenshots in {lang}!'
    },
    'zh': {
        // App Header & Sidebar
        'app_title': 'App Store 截图生成器',
        'project': '项目',
        'edit_languages': '编辑语言...',
        'translate_all_btn': '全部翻译...',
        'magical_titles_title': '魔法标题 - AI 生成标题',
        'about_title': '关于',
        'settings_title': '设置',
        'default_project': '默认项目',
        'screenshots': '截图',
        'add_screenshots': '添加截图',
        'blank_screen': '空白屏幕',
        'export_all': '全部导出',
        'export_current_title': '导出当前截图',
        'export_all_title': '导出所有截图（ZIP 压缩包）',
        'new_project_title': '新建项目',
        'rename_project_title': '重命名项目',
        'delete_project_title': '删除项目',

        // Tabs
        'tab_background': '背景',
        'tab_device': '设备',
        'tab_text': '文字',
        'tab_elements': '元素',
        'tab_popouts': '弹出',

        // Background Tab
        'bg_type': '背景类型',
        'bg_gradient': '渐变',
        'bg_solid': '纯色',
        'bg_image': '图片',
        'bg_presets': '渐变预设',
        'bg_direction': '渐变方向',
        'bg_colors': '颜色',
        'bg_add_color': '添加颜色节点',
        'bg_image_fit': '图片填充',
        'bg_cover': '覆盖 (Cover)',
        'bg_contain': '包含 (Contain)',
        'bg_fill': '拉伸 (Fill)',
        'bg_blur': '模糊',
        'bg_overlay': '叠加颜色',
        'bg_opacity': '不透明度',
        'bg_noise': '杂色',
        'bg_noise_intensity': '杂色强度',

        // Device Tab
        'device_type': '设备类型',
        'device_2d': '2D',
        'device_3d': '3D',
        'device_model': '设备模型',
        'device_rotation_x': '旋转 X',
        'device_rotation_y': '旋转 Y',
        'device_rotation_z': '旋转 Z',
        'device_presets': '位置预设',
        'device_scale': '截图缩放',
        'device_y': '垂直位置',
        'device_x': '水平位置',
        'device_radius': '圆角半径',
        'device_tilt': '倾斜 / 旋转',
        'device_shadow': '阴影',
        'device_border': '边框',
        'device_frame_color': '机身颜色',
        'device_corner_radius': '圆角半径',
        'device_rotation': '倾斜 / 旋转',
        'device_shadow_color': '阴影颜色',
        'device_shadow_blur': '模糊',
        'device_shadow_opacity': '不透明度',
        'device_shadow_y': '纵向偏移',
        'device_shadow_x': '横向偏移',
        'device_border_color': '边框颜色',
        'device_border_width': '边框宽度',
        'device_border_opacity': '边框不透明度',

        // Text Tab
        'text_headline': '标题',
        'text_subheadline': '副标题',
        'text_enabled': '启用',
        'text_content': '内容',
        'text_font': '字体',
        'text_size': '字体大小',
        'text_weight': '字重',
        'text_color': '颜色',
        'text_position': '位置',
        'text_offset_y': '纵向偏移',
        'text_line_height': '行高',
        'text_translate_action': '翻译至所有语言...',
        'text_ai_action': '使用 AI 自动翻译',
        'text_lang_layout': '分语言布局',
        'text_pos_top': '顶部',
        'text_pos_bottom': '底部',
        'text_offset': '纵向偏移',
        'text_opacity': '不透明度',
        'fonts_search': '搜索字体...',
        'fonts_cat_popular': '热门',
        'fonts_cat_system': '系统',
        'fonts_cat_all': '全部',
        'layer_behind': '底层',
        'layer_middle': '中层',
        'layer_front': '顶层',
        'layer_label': '图层位置',
        'element_label': '元素',
        'element_text_label': '文字元素',
        'layer_behind_full': '在截图下方',
        'layer_middle_full': '在截图上方',
        'layer_front_full': '在文字上方',

        // Elements Tab
        'elements_add': '添加元素',
        'elements_text': '文字',
        'elements_image': '图片',
        'elements_shape': '形状',
        'elements_list': '项目元素',
        'elements_none': '本项目暂无元素',
        'elements_hint': '添加图片、文字、表情或图标',
        'elements_emoji': '表情',
        'elements_icon': '图标',
        'elements_search_emoji': '搜索表情...',
        'elements_search_icon': '搜索图标...',
        'elements_cat_popular': '热门',
        'elements_cat_smileys': '笑脸',
        'elements_cat_objects': '物体',
        'elements_cat_symbols': '符号',
        'elements_cat_animals': '动物',
        'elements_cat_food': '食物',
        'elements_cat_travel': '旅行',
        'elements_cat_flags': '旗帜',
        'elements_cat_all': '全部',

        // Popouts Tab
        'popouts_title': '弹出元素',
        'popouts_desc': '添加从设备屏幕弹出的 3D 元素',
        'popouts_coming_soon': '即将推出',

        // Modals - Settings
        'settings_header': '设置',
        'settings_api_provider': 'AI 提供商',
        'settings_api_key': 'API 密钥',
        'settings_model': '模型',
        'settings_appearance': '外观界面',
        'settings_theme_auto': '跟随系统',
        'settings_theme_light': '浅色',
        'settings_theme_dark': '深色',
        'settings_ui_language': '界面语言',
        'settings_cancel': '取消',
        'settings_save': '保存设置',

        // Modals - About
        'about_header': 'App Store 截图生成器',
        'about_desc': '一个免费、简洁的工具，用于创建带有自定义背景、文字叠加和设备框架的精美 App Store 营销截图。',
        'about_created_by': '作者',
        'about_license': '本项目基于 MIT 许可证开源，完全免费。',
        'about_links': '在线版本 · GitHub 仓库',
        'about_close': '关闭',

        // Modals - Languages
        'languages_header': '项目语言',
        'languages_desc': '管理本项目中可用的文本语言。',
        'languages_add': '添加语言...',
        'languages_done': '完成',

        // Modals - Screenshot Translations
        'trans_header': '多语言截图翻译',
        'trans_desc': '为每种语言上传该截图的本地化版本。',
        'trans_done': '完成',

        // Modals - Export
        'export_header': '导出截图',
        'export_desc': '选择要导出的语言版本。',
        'export_current_only': '仅当前语言',
        'export_all_langs': '所有语言',
        'export_all_langs_desc': '每个语言单独文件夹',
        'export_cancel': '取消',

        // Modals - Duplicate
        'dup_header': '截图已存在',
        'dup_desc': '已存在同名截图。你想如何处理？',
        'dup_existing': '现有',
        'dup_new': '新增',
        'dup_replace': '替换现有',
        'dup_keep_both': '保留两个 (重命名)',
        'dup_skip': '跳过',

        // Messages & Alerts
        'msg_no_screenshots': '上传截图以开始制作',
        'msg_delete_project_confirm': '确定要删除这个项目吗？',
        'msg_delete_last_project': '无法删除最后一个项目',
        'msg_enter_project_name': '请输入项目名称',
        'msg_rename_project': '重命名项目',
        'msg_new_project': '新建项目',
        'msg_success_translated': '成功翻译了 {count} 条文本！',
        'msg_api_key_saved': '✓ API 密钥已保存',
        'btn_create': '创建',
        'btn_rename': '重命名',
        'text_loading': '正在加载...',
        'element_text_type': '元素文字',
        'msg_api_key_required': '请在设置中添加 AI API 密钥以使用自动翻译功能。',
        'msg_connection_failed': '连接失败。请检查设置中的 API 密钥。',
        'msg_invalid_api_key': 'API 密钥无效。请在设置（齿轮图标）中更新。',
        'msg_add_languages_first': '请先在语言菜单中为项目添加更多语言。',
        'msg_upload_first': '请先上传截图',
        'msg_upload_multiple_first': '请先上传一些截图',
        'msg_no_text': '在 {lang} 中未找到文本。请先添加标题或副标题。',

        // Device Names
        'device_iphone_6.9': 'iPhone 6.9"',
        'device_iphone_6.7': 'iPhone 6.7"',
        'device_iphone_6.5': 'iPhone 6.5"',
        'device_iphone_5.5': 'iPhone 5.5"',
        'device_ipad_12.9': 'iPad 12.9"',
        'device_ipad_11': 'iPad 11"',
        'device_android_phone': '安卓手机',
        'device_android_phone_hd': '安卓手机 (高清)',
        'device_android_tablet_7': '安卓平板 7"',
        'device_android_tablet_10': '安卓平板 10"',
        'device_og': 'Open Graph 社交图片',
        'device_twitter': 'Twitter/X 社交卡片',
        'device_hero': '网站 Hero 大图',
        'device_feature': '商店推荐位图片',
        'device_custom': '自定义尺寸',
        'device_custom_desc': '设置尺寸',
        'count_screenshots': '{count} 张截图',
        'count_screenshots_single': '1 张截图',

        // Magical Titles
        'magical_titles_generating': '正在生成魔法标题...',
        'magical_titles_analyzing': '正在使用 AI 分析 {count} 张截图...',
        'magical_titles_using': '使用',
        'msg_magical_titles_success': '成功为 {count} 张截图生成了 {lang} 标题！'
    }
};

/**
 * Get current UI language from localStorage
 * @returns {string} - 'en' or 'zh'
 */
function getUILanguage() {
    return localStorage.getItem('yuzu-shot-ui-language') || 'en';
}

/**
 * Get translated string by key
 * @param {string} key - Translation key
 * @returns {string} - Translated text or key if not found
 */
function t(key) {
    const lang = getUILanguage();
    if (uiTranslations[lang] && uiTranslations[lang][key]) {
        return uiTranslations[lang][key];
    }
    // Fallback to English
    if (uiTranslations['en'] && uiTranslations['en'][key]) {
        return uiTranslations['en'][key];
    }
    return key;
}

/**
 * Replace placeholders like {count} with values
 * @param {string} key - Translation key
 * @param {Object} params - Key-value pairs for placeholders
 * @returns {string} - Formatted translation
 */
function tf(key, params = {}) {
    let text = t(key);
    Object.keys(params).forEach(p => {
        text = text.replace(`{${p}}`, params[p]);
    });
    return text;
}

/**
 * Update all DOM elements with data-i18n attributes
 */
function applyTranslations() {
    // 1. Static text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // 2. Button / span text with specific nested elements (using innerHTML if needed, be careful)
    // For elements that have icons + text, it's better to translate only the text node.

    // 3. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // 4. Titles / Tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // 5. Update language meta
    document.documentElement.lang = getUILanguage();
}
