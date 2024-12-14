const inputElement = document.getElementById('input');
inputElement.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let cmd = inputElement.value;
        inputElement.value = '';
        console.log('User entered:', cmd);
        if (cmd == 'help') {
            const command = document.createElement('p');
            command.textContent = 'echo, recordlist, exit, help, clear, ooc';
            document.body.appendChild(command);
        } else if (cmd == 'exit') {
            window.close();
        } else if (cmd == 'recordlist') {
            recordlist('2074-11-11_0128_UNBN.trn');
            recordlist('2083-08-18_UNHABITAT.doc');
            recordlist('2103-06-03_AUGOV.doc');
        } else if (cmd.includes('echo(')) {
            if (cmd.includes('2074-11-11_0128_UNBN.trn')) {
                displayRecord = '[START TRANSCRIPT]<br>The following is a message from the United Nations. It has been confirmed as genuine by your local shelter leaders.<br>It is safe to leave the shelters at this moment. Radiation levels have fallen to non-lethal levels.<br>To travel outside, please put on an oxygen mask. Though radiation levels are no longer lethal, they can still pose a health risk if one is exposed to it for extended periods of time.<br>It is forecast that radiation levels will fall enough for civilian life to resume as it did pre-war by the year 2080.<br>For now, continue your shelter routines as usual.<br>We now resume your regularly scheduled programming.<br>[END TRANSCRIPT]';
                showRecord(displayRecord);
            }
            if (cmd.includes('2083-08-18_UNHABITAT.doc')) {
                displayRecord = 'To Whom It May Concern,<br>\tOn behalf of the Secretary-General, we would like to congratulate all who managed to live throughout the state of inhabitability throughout the past four decades. We at the United Nations understand the struggle of having to live in secluded, non-preferable areas throughout the duration of the transition back to normality.<br>\tWe very much appreciate the compliance you all have shown during the period of shelter. This letter has been sent towards all shelter leaders to inform all remaining civilians that it is now safe to leave your shelters. Major cities are in the process of rebuilding, and normal civilian life is soon to resume.<br>\tPlease wait for United Nations Peacekeeping Forces to arrive towards your shelter and escort all occupants outwards. From there, you will be escorted towards the established city of gathering, where rebuilding efforts are most progressed. After a set amount of time, civilians will be able to expand outwards.<br>\tFood and shelter will be provided by the United Nations for the time being. After local governments have been reformed, peacekeeping forces will pull out, and local governments resume leadership.<br>\tOn behalf of the Secretary-General, and the United Nations, thank you.<br><br>\tBest regards,<br>\tUnited Human Settlements Program';
                showRecord(displayRecord);
            }
            if (cmd.includes('2103-06-03_AUGOV.doc')) {
                displayRecord = 'Welcome!<br>We assume that the individual(s) assigned to this building room are English speakers. If this is not true, please go to www.au.gov/translate to get a translation of this article or go to your nearest government establishment.<br>We hope you are enjoying your current home! This letter has been sent to serve as an update on the current situation involving the re-establishment of local governments.<br>As of June 1, 2102, United Nations Peacekeeping Forces have begun their exit of the African continent. Most agencies have had authority returned to the African governments, and leadership is set to return to how it was pre-war.<br>The Prime Minister and United Nations Secretary-General are set to make a speech on June 7, 2102, 14:00 UCT+1 about what standard African policies will coming forward. You will be able to view this speech at www.au.gov, or on most broadcasting networks.<br>Once again, thank you for your compliance in this difficult time.<br><br>Best,\t<br>Government of the African Union';
                showRecord(displayRecord);
            }
        } else if (cmd == 'clear') {
            location.reload();
        } else if (cmd == 'ooc') {
            const command = document.createElement('p');
            command.textContent = 'Might add more if I decide not to be lazy for once, lol.';
            document.body.appendChild(command);
            document.body.appendChild(command);
        } else {
            const command = document.createElement('p');
            command.textContent = cmd;
            document.body.appendChild(command);
        }
    }
});

function recordlist(record) {
    const command = document.createElement('p');
    command.textContent = record;
    document.body.appendChild(command);
}

let id = 0;
function showRecord(record) {
    const page = document.createElement('table');
    const pageR = document.createElement('tr');
    const pageD = document.createElement('td');
    const recordPage = document.createElement('p');
    recordPage.id = "record" + String(id);
    pageD.appendChild(recordPage);
    pageR.appendChild(pageD);
    page.appendChild(pageR);
    document.body.appendChild(page);
    document.getElementById("record" + String(id)).innerHTML = record;
    id = id + 1;
    console.log(id);
}